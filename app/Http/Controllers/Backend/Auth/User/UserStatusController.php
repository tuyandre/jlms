<?php

namespace App\Http\Controllers\Backend\Auth\User;

use App\Models\Auth\User;
use App\Http\Controllers\Controller;
use App\Models\Certificate;
use App\Models\StudentCard;
use App\Notifications\Frontend\Auth\StudentRegistration;
use App\Repositories\Backend\Auth\UserRepository;
use App\Http\Requests\Backend\Auth\User\ManageUserRequest;
use Carbon\Carbon;
use Illuminate\Support\Facades\Notification;
/**
 * Class UserStatusController.
 */
class UserStatusController extends Controller
{
    /**
     * @var UserRepository
     */
    protected $userRepository;

    /**
     * @param UserRepository $userRepository
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @param ManageUserRequest $request
     *
     * @return mixed
     */
    public function getDeactivated(ManageUserRequest $request)
    {
        return view('backend.auth.user.deactivated')
            ->withUsers($this->userRepository->getInactivePaginated(25, 'id', 'asc'));
    }

    /**
     * @param ManageUserRequest $request
     *
     * @return mixed
     */
    public function getDeleted(ManageUserRequest $request)
    {
        return view('backend.auth.user.deleted')
            ->withUsers($this->userRepository->getDeletedPaginated(25, 'id', 'asc'));
    }

    /**
     * @param ManageUserRequest $request
     * @param User              $user
     * @param                   $status
     *
     * @return mixed
     * @throws \App\Exceptions\GeneralException
     */
    public function mark(ManageUserRequest $request, User $user, $status)
    {
        $this->userRepository->mark($user, $status);
        if (!$user->isConfirmed()){
            $user->confirmed=1;
            $user->save();
        }
        if ($status==1){
            $name=$user->first_name." ".$user->last_name;

            if ($user){

                $currentDateTime2 = Carbon::now()->format('d M, Y');
                $currentDateTime = Carbon::now()->format('Y-m-d');
                $newDateTime = Carbon::now()->addYear()->format('Y-m-d');
                $newDateTime2 = Carbon::now()->addYear()->format('d M, Y');

                $card = StudentCard::firstOrCreate([
                    'user_id' => $user->id,
                    'phone' => $user->phone,
                    'full_name' => $name,
                    'photo' => $user->avatar_location,
                    'program' => $user->program,
                    'issue_date' => $currentDateTime,
                    'expired_date' => $newDateTime,
                ]);


                $data = [
                    'full_name' => $name,
                    'program' => $user->program,
                    'issue_date' => $currentDateTime2,
                    'expire_date' => $newDateTime2,
                    'username' => $user->username,
                    'phone' => $user->phone,
                    'photo' => $user->avatar_location,
                ];
                $certificate_name = 'StudentCard-' . $user->id. '.pdf';
                $card->name = $name;
                $card->url = $certificate_name;
                $card->save();

                $pdf = \PDF::loadView('backend.students.studentCardDesign', compact('data','user'));

//                ->setPaper('', 'landscape')
                $pdf->save(public_path('/students/cards/' . $certificate_name));
            }



            Notification::send($user, new StudentRegistration($user));



            $data = array(
                "sender"=>'+250788866742',
                "recipients"=>$user->phone,
                "message"=>"Welcome ".$name. "Your Registration Confirmed please check your Email\n "
            ,);
            $url = "https://www.intouchsms.co.rw/api/sendsms/.json";
            $data = http_build_query($data);
            $username="tuyandre20";
            $password="kamana1234567";

            $ch = curl_init();
            curl_setopt($ch,CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_USERPWD, $username . ":" . $password);
            curl_setopt($ch,CURLOPT_POST,true);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
            curl_setopt($ch,CURLOPT_POSTFIELDS, $data);
            $result = curl_exec($ch);
            $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);




        }

        return redirect()->route(
            $status == 1 ?
            'admin.auth.user.index' :
            'admin.auth.user.deactivated'
        )->withFlashSuccess(__('alerts.backend.users.updated'));
    }

    /**
     * @param ManageUserRequest $request
     * @param User              $deletedUser
     *
     * @return mixed
     * @throws \App\Exceptions\GeneralException
     * @throws \Throwable
     */
    public function delete(ManageUserRequest $request, User $deletedUser)
    {
        $this->userRepository->forceDelete($deletedUser);

        return redirect()->route('admin.auth.user.deleted')->withFlashSuccess(__('alerts.backend.users.deleted_permanently'));
    }

    /**
     * @param ManageUserRequest $request
     * @param User              $deletedUser
     *
     * @return mixed
     * @throws \App\Exceptions\GeneralException
     */
    public function restore(ManageUserRequest $request, User $deletedUser)
    {
        $this->userRepository->restore($deletedUser);

        return redirect()->route('admin.auth.user.index')->withFlashSuccess(__('alerts.backend.users.restored'));
    }
}

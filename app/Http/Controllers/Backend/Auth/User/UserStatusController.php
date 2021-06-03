<?php

namespace App\Http\Controllers\Backend\Auth\User;

use App\Models\Auth\User;
use App\Http\Controllers\Controller;
use App\Notifications\Frontend\Auth\StudentRegistration;
use App\Repositories\Backend\Auth\UserRepository;
use App\Http\Requests\Backend\Auth\User\ManageUserRequest;
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

            Notification::send($user, new StudentRegistration($user));

            $name=$user->first_name." ".$user->last_name;

//            $data = array(
//                "sender"=>'+250788866742',
//                "recipients"=>$user->phone,
//                "message"=>"Welcome ".$name. "Your Registration Confirmed please check your Email\n "
//            ,);
//            $url = "https://www.intouchsms.co.rw/api/sendsms/.json";
//            $data = http_build_query($data);
//            $username="tuyandre20";
//            $password="kamana1234567";
//
//            $ch = curl_init();
//            curl_setopt($ch,CURLOPT_URL, $url);
//            curl_setopt($ch, CURLOPT_USERPWD, $username . ":" . $password);
//            curl_setopt($ch,CURLOPT_POST,true);
//            curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
//            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
//            curl_setopt($ch,CURLOPT_POSTFIELDS, $data);
//            $result = curl_exec($ch);
//            $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
//            curl_close($ch);
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

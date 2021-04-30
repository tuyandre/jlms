<?php

namespace App\Notifications\Frontend\Auth;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class StudentRegistration extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($user)
    {
        $this->user=$user;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject(app_name().': '.__('strings.emails.auth.student_registration'))
            ->line(__('strings.emails.auth.registration_reason'))
            ->action(__('buttons.emails.auth.login_button'), url('/jsms/login'))
            ->line(__('strings.emails.auth.registration_info'))
            ->line('Full Name: '.$this->user->first_name." ".$this->user->last_name)
            ->line('Email: '.$this->user->email)
            ->line('Password: '.$this->user->helpas)
            ->line(__('strings.emails.auth.registration_data'));
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}

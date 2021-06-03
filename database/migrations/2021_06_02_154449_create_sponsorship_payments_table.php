<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSponsorshipPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sponsorship_payments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('sponsor_id');
            $table->unsignedBigInteger('order_id');
            $table->date('sponsorDepositDate');
            $table->string('service')->nullable();
            $table->string('sponsorDepositPaymentRefNo');
            $table->bigInteger('sponsorDepositAmount');
            $table->string('sponsorAttachment')->nullable();
            $table->integer('status')->default(0)->comment('0 - in progress, 1 - Completed,2 - Rejected');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sponsorship_payments');
    }
}

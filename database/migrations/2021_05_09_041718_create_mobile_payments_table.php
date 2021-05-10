<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMobilePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mobile_payments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('order_id');
            $table->date('mobileMoneyDate');
            $table->string('mobileMoneyPaymentRefNo');
            $table->string('service')->nullable();
            $table->string('mobileMoneyDepositorNames');
            $table->string('serviceProvider');
            $table->string('mobileMoneyPhoneNumber');
            $table->bigInteger('mobileMoneyAmount');
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
        Schema::dropIfExists('mobile_payments');
    }
}

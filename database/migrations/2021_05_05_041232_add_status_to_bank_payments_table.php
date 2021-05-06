<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStatusToBankPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('bank_payments', function (Blueprint $table) {
            $table->integer('status')->default(0)->comment('0 - in progress, 1 - Completed,2 - Rejected');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('bank_payments', function (Blueprint $table) {
            $table->dropColumn("status");
        });
    }
}

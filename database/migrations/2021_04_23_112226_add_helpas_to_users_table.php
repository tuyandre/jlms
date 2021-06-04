<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddHelpasToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('program')->nullable();
            $table->string('username')->unique()->nullable();
            $table->string('helpas')->nullable();
            $table->string('nid')->nullable();
//            $table->string('nid')->unique()->nullable();
            $table->string('education')->nullable();
            $table->string('sponsorship')->default('SelfSponsored');
            $table->integer('payment_mode')->default(0);
            $table->string('information')->nullable();
            $table->text('about')->nullable();
            $table->string('phone2')->unique()->nullable();
            $table->string('residence')->default('rwa');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['username','residence','phone2','about','information','payment_mode','sponsorship','education','nid','helpas','program']);

        });
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentCardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_cards', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->unsigned()->nullable();
            $table->string('name')->nullable();
            $table->string('program')->nullable();
            $table->string('phone')->nullable();
            $table->string('full_name')->nullable();
            $table->string('photo')->nullable();
            $table->date('issue_date')->useCurrent();
            $table->date('expired_date');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->text('url')->nullable();
            $table->tinyInteger('status')->default(1)->comment('1-Generated 0-Not Generated');

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
        Schema::dropIfExists('student_cards');
    }
}

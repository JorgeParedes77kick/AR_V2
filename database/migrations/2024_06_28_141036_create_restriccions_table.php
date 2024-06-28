<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRestriccionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('restricciones', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 150);
            $table->foreignId('tipo_restriccion_id')->constrained('tipo_restricciones');
            $table->integer('valor_restricion');
            $table->foreignId('curriculum_id')->constrained('curriculums');

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
        Schema::dropIfExists('restricciones');
    }
}

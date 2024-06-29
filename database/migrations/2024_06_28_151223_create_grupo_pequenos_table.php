<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGrupoPequenosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grupo_pequenos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ciclo_id')->constrained('ciclos');
            $table->enum('dia_curso', ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo', 'none'])->default('none');
            $table->time('hora_curso')->nullable();
            $table->boolean('activo_inscripcion')->default(true);
            $table->foreignId('temporada_id')->constrained('temporadas');

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
        Schema::dropIfExists('grupo_pequenos');
    }
}

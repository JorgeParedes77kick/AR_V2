<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personas', function (Blueprint $table) {
            $table->id();
            // $table->string('correo', 250)->unique();
            // $table->string('password');
            $table->string('nombre', 250);
            // $table->timestamp('email_verified_at')->nullable();
            $table->string('apellido', 250);
            $table->string('dni', 20)->nullable();
            $table->date('fecha_nacimiento');
            $table->foreignId('genero_id')->constrained('generos');
            $table->foreignId('estado_civil_id')->constrained('estados_civiles');
            $table->foreignId('pais_id')->constrained('paises');
            $table->foreignId('ciudad_id')->constrained('ciudades');
            $table->foreignId('nacionalidad_id')->constrained('nacionalidades');
            $table->string('direccion', 255);
            $table->string('codigo_postal', 100)->nullable();
            $table->string('telefono', 70);
            $table->string('fotografia')->nullable();
            $table->string('ocupacion');
            $table->string('informacion_adicional', 250)->nullable();

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
        Schema::dropIfExists('personas');
    }
}

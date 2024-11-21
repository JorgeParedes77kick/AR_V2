<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsPersonasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasColumn('personas', 'tipo_documento')) {
          Schema::table('personas', function (Blueprint $table) {
            $table->integer('tipo_documento')->after('apellido')->nullable()->default(null);
          });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (Schema::hasColumn('personas', 'type_document')) {
          Schema::table('personas', function (Blueprint $table) {
            $table->dropColumn('type_document');
          });
        }
    }
}

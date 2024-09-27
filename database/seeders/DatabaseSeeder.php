<?php

use Database\Seeders\GlobalesSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
    public function run() {
        $this->call(GlobalesSeeder::class);
        // $this->call(PaisesTableSeeder::class);
        // $this->call(EstadosTableSeeder::class);
        // $this->call(NacionalidadesSeeder::class);
        // $this->call(GrupospequenosTableSeeder::class);
        // $this->call(CiclosTableSeeder::class);
        // $this->call(AdminsTableSeeder::class);
        // $this->call(CoordinadorsTableSeeder::class);
        // $this->call(MonitorTableSeeder::class);
        // $this->call(LiderTableSeeder::class);
        //$this->call(UserTableSeeder::class);
        // $this->call(TemporadaTableSeeder::class);
        // $this->call(GpequenoperiodoTableSeeder::class);
        // $this->call(GrupopequenoLiderTableSeeder::class);
        // $this->call(RecursosTableSeeder::class);
    }
}

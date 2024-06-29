<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Temporada extends Model
{
    use HasFactory;

    protected $table = 'temporadas';

    protected $fillable = [
        'nombre',
        'prefijo',
        'titulo',
        'fecha_inicio',
        'fecha_cierre',
        'inscripcion_inicio',
        'inscripcion_cierre',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'fecha_inicio' => 'date',
        'fecha_cierre' => 'date',
        'inscripcion_inicio' => 'date',
        'inscripcion_cierre' => 'date',
    ];

    /**
     * Relación con los grupos pequeños
     */
    public function gruposPequenos(): HasMany
    {
        return $this->hasMany(GrupoPequeno::class, 'temporada_id');
    }

    /**
     * Relación con las semanas
     */
    public function semanas(): HasMany
    {
        return $this->hasMany(Semana::class, 'temporada_id');
    }
}

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
        'fecha_inicio' => 'string',
        'fecha_cierre' => 'string',
        'inscripcion_inicio' => 'string',
        'inscripcion_cierre' => 'string',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
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

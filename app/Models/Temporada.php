<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Temporada extends Model {
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
        'activo',
        'activo_inscripcion',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'fecha_inicio' => 'string',
        'fecha_cierre' => 'string',
        'inscripcion_inicio' => 'string',
        'inscripcion_cierre' => 'string',
        'activo' => 'boolean',
        'activo_inscripcion' => 'boolean',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
    protected $attributes = ['titulo' => ''];
    protected $appends = ['semanas'];

    public function getSemanasAttribute() {
        $fecha_inicio = Carbon::parse($this->fecha_inicio);
        $fecha_cierre = Carbon::parse($this->fecha_cierre);
        $dias = $fecha_inicio->diffInDays($fecha_cierre);
        $semanas = $dias / 7;
        return ceil($semanas);
    }

    /**
     * Relación con los grupos pequeños
     */
    public function gruposPequenos(): HasMany {
        return $this->hasMany(GrupoPequeno::class, 'temporada_id');
    }

    /**
     * Relación con las semanas
     */
    public function semanas(): HasMany {
        return $this->hasMany(Semana::class, 'temporada_id');
    }

    public function scopeActivo($q) {
        return $q->where('activo', true);
    }
    public function scopeEnInscripcion($q) {
        return $q->where('activo_inscripcion', true);
    }
}

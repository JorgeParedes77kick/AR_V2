<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class GrupoPequeno extends Model {
    use HasFactory;

    protected $table = 'grupo_pequenos';

    protected $fillable = [
        'ciclo_id',
        'dia_curso',
        'hora_inicio',
        'hora_fin',
        'activo_inscripcion',
        'temporada_id',
        'info_adicional',
        'nombre_curso',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'hora_curso' => 'time',
        'activo_inscripcion' => 'boolean',
    ];

    /**
     * Relación con el ciclo
     */
    public function ciclo(): BelongsTo {
        return $this->belongsTo(Ciclo::class, 'ciclo_id');
    }

    /**
     * Relación con la temporada
     */
    public function temporada(): BelongsTo {
        return $this->belongsTo(Temporada::class, 'temporada_id');
    }

    /**
     * Relación con las inscripciones
     */
    public function inscripciones(): HasMany {
        return $this->hasMany(Inscripcion::class, 'grupo_pequeno_id');
    }
}

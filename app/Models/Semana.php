<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Semana extends Model {
    use HasFactory;

    protected $table = 'semanas';

    protected $fillable = [
        'fecha_inicio',
        'fecha_fin',
        'temporada_id',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'fecha_inicio' => 'date',
        'fecha_fin' => 'date',
    ];

    /**
     * Relación con la temporada
     */
    public function temporada(): BelongsTo {
        return $this->belongsTo(Temporada::class, 'temporada_id');
    }

    /**
     * Relación con las asistencias
     */
    public function asistencias(): HasMany {
        return $this->hasMany(Asistencia::class, 'semana_id');
    }
}

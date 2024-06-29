<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Asistencia extends Model
{
    use HasFactory;

    protected $table = 'asistencias';

    protected $fillable = [
        'inscripcion_id',
        'semana_id',
        'estado_asistencia_id',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Relación con la inscripción
     */
    public function inscripcion(): BelongsTo
    {
        return $this->belongsTo(Inscripcion::class, 'inscripcion_id');
    }

    /**
     * Relación con la semana
     */
    public function semana(): BelongsTo
    {
        return $this->belongsTo(Semana::class, 'semana_id');
    }

    /**
     * Relación con el estado de asistencia
     */
    public function estadoAsistencia(): BelongsTo
    {
        return $this->belongsTo(EstadoAsistencia::class, 'estado_asistencia_id');
    }
}

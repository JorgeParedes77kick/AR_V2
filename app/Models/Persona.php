<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Persona extends Model
{
    use HasFactory;

    protected $table = 'personas';

    protected $fillable = [
        'nombre',
        'apellido',
        'dni',
        'fecha_nacimiento',
        'direccion',
        'codigo_postal',
        'telefono',
        'fotografia',
        'ocupacion',
        'informacion_adicional',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'fecha_nacimiento' => 'date',
    ];

    /**
     * Relación con el género
     */
    public function genero(): BelongsTo
    {
        return $this->belongsTo(Genero::class, 'genero_id');
    }

    /**
     * Relación con el estado civil
     */
    public function estadoCivil(): BelongsTo
    {
        return $this->belongsTo(EstadoCivil::class, 'estado_civil_id');
    }

    /**
     * Relación con el país
     */
    public function pais(): BelongsTo
    {
        return $this->belongsTo(Pais::class, 'pais_id');
    }

    /**
     * Relación con la ciudad
     */
    public function ciudad(): BelongsTo
    {
        return $this->belongsTo(Ciudad::class, 'ciudad_id');
    }

    /**
     * Relación con la nacionalidad
     */
    public function nacionalidad(): BelongsTo
    {
        return $this->belongsTo(Nacionalidad::class, 'nacionalidad_id');
    }

    /**
     * Relación con el usuario asociado a la persona
     */
    public function user(): HasOne
    {
        return $this->hasOne(Usuario::class, 'persona_id');
    }
}

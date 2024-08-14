<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Restriccion extends Model {
    use HasFactory;

    protected $table = 'restricciones';

    protected $fillable = [
        'nombre',
        'tipo_restriccion_id',
        'valor_restricion',
        'curriculum_id',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Relación con el tipo de restricción
     */
    public function tipoRestriccion(): BelongsTo {
        return $this->belongsTo(TipoRestriccion::class, 'tipo_restriccion_id');
    }

    /**
     * Relación con el currículum
     */
    public function curriculum(): BelongsTo {
        return $this->belongsTo(Curriculum::class, 'curriculum_id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Adicional extends Model
{
    use HasFactory;

    protected $table = 'adicionales';

    protected $fillable = [
        'nombre',
        'curriculum_id',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Relación con el curriculum
     */
    public function curriculum(): BelongsTo
    {
        return $this->belongsTo(Curriculum::class, 'curriculum_id');
    }

    /**
     * Relación con las inscripciones
     */
    public function inscripciones(): BelongsToMany
    {
        return $this->belongsToMany(Inscripcion::class, 'adicional_inscripciones');
    }
}

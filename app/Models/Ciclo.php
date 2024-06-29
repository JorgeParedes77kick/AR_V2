<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Ciclo extends Model
{
    use HasFactory;

    protected $table = 'ciclos';

    protected $fillable = [
        'nombre',
        'descripcion',
        'curriculum_id',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Relación con el currículum
     */
    public function curriculum(): BelongsTo
    {
        return $this->belongsTo(Curriculum::class, 'curriculum_id');
    }

    /**
     * Relación con los requisitos que lo tienen como pre-requisito
     */
    public function requisitos(): HasMany
    {
        return $this->hasMany(Requisito::class, 'ciclo_pre_id');
    }

    /**
     * Relación con los recursos asociados
     */
    public function recursos(): HasMany
    {
        return $this->hasMany(Recurso::class, 'ciclo_id');
    }

    /**
     * Relación con los grupos pequeños
     */
    public function gruposPequenos(): HasMany
    {
        return $this->hasMany(GrupoPequeno::class, 'ciclo_id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Curriculum extends Model {
    use HasFactory;

    protected $table = 'curriculums';

    protected $fillable = [
        'nombre',
        'libro',
        'descripcion',
        'cantidad_clases',
        'cantidad_cupos',
        'imagen',
        'imagen_landing',
        'activo',
    ];

    protected $casts = [
        'activo' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Relación con las restricciones
     */
    public function restricciones(): HasMany {
        return $this->hasMany(Restriccion::class, 'curriculum_id');
    }

    /**
     * Relación con los ciclos
     */
    public function ciclos(): HasMany {
        return $this->hasMany(Ciclo::class, 'curriculum_id');
    }

    /**
     * Relación con los adicionales
     */
    public function adicionales(): HasMany {
        return $this->hasMany(Adicional::class, 'curriculum_id');
    }
    /**
     * Relación con los usuarios
     */
    public function usuarios(): BelongsToMany {
        return $this->belongsToMany(Usuario::class, 'usuario_curriculums');
    }

    public function scopeActive($query) {
        return $query->where('activo', true);
    }
}

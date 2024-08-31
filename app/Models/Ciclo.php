<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Ciclo extends Model {
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

    protected static function booted() {
        // static::addGlobalScope('withRequisitos', function (Builder $builder) {
        //     $builder->with([
        //         'requisitos:ciclo_id,ciclo_pre_id',
        //         'requisitos.cicloPre' => function ($query) {
        //             $query->withoutGlobalScopes(['withRequisitos']);
        //         },
        //     ]);
        // });
        static::addGlobalScope('withCurriculum', function (Builder $builder) {
            $builder->with([
                'curriculum:id,nombre',
            ]);
        });
    }

    /**
     * Relación con el currículum
     */
    public function curriculum(): BelongsTo {
        return $this->belongsTo(Curriculum::class, 'curriculum_id');
    }

    /**
     * Relación con los requisitos que lo tienen como pre-requisito
     */
    public function requisitos(): HasMany {
        return $this->hasMany(Requisito::class, 'ciclo_id');
    }

    /**
     * Relación con los recursos asociados
     */
    public function recursos(): HasMany {
        return $this->hasMany(Recurso::class, 'ciclo_id');
    }

    /**
     * Relación con los grupos pequeños
     */
    public function gruposPequenos(): HasMany {
        return $this->hasMany(GrupoPequeno::class, 'ciclo_id');
    }

    public function scopeWithRecursos($query) {
        return $query->with('recursos:id,nombre,link_lectura,link_escritura,clase,ciclo_id');
    }
    public function scopeWithRequisitos(Builder $query) {
        return $query->with([
            'requisitos:ciclo_id,ciclo_pre_id',
            'requisitos.cicloPre' => function ($query) {
                $query->withoutGlobalScopes(['withRequisitos']);
            },
        ]);
    }

    // Scope local para cargar el curriculum
    // public function scopeWithCurriculum(Builder $query)
    // {
    //     return $query->with([
    //         'curriculum:id,nombre',
    //     ]);
    // }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Usuario extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'usuarios';

    /**
     * Columns used to insert
     * @var string[]
     */
    protected $fillable = [
        'nick_name',
        'email',
        'password',
        'persona_id',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Relación con la persona asociada al usuario
     */
    public function persona(): BelongsTo
    {
        return $this->belongsTo(Persona::class, 'persona_id');
    }

    /**
     * Relación con los roles asignados al usuario
     */
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Rol::class, 'usuario_roles', 'usuario_id', 'rol_id');
    }

    /**
     * Relación con las inscripciones
     */
    public function inscripciones(): HasMany
    {
        return $this->hasMany(Inscripcion::class, 'usuario_id');
    }

    /**
     * Relación con los curriculums
     */
    public function curriculums(): BelongsToMany
    {
        return $this->belongsToMany(Curriculum::class, 'usuario_curriculums');
    }
}

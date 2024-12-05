<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Usuario extends Authenticatable {
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

    protected $appends = ['fullNombre', 'nombreCompleto'];
    protected static function booted() {
        static::addGlobalScope('withCurriculum', function (Builder $builder) {
            $builder->with(['persona']);
        });
    }
    public function scopeWithCurriculum($query) {
        return $query->with('persona');
    }
    /**
     * Relación con la persona asociada al usuario
     */
    public function persona(): BelongsTo {
        return $this->belongsTo(Persona::class, 'persona_id');
    }

    /**
     * Relación con los roles asignados al usuario
     */
    public function roles(): BelongsToMany {
        return $this->belongsToMany(Rol::class, 'usuario_roles', 'usuario_id', 'rol_id');
    }

    /**
     * Relación con las inscripciones
     */
    public function inscripciones(): HasMany {
        return $this->hasMany(Inscripcion::class, 'usuario_id');
    }

    /**
     * Relación con los curriculums
     */
    public function curriculums(): BelongsToMany {
        return $this->belongsToMany(Curriculum::class, 'usuario_curriculums');
    }

    /*
     * Accessor para el atributo "fullNombre".
     * Si existe una persona asociada, devuelve el nombre completo; de lo contrario, solo el email.
     */
    public function getFullNombreAttribute() {
        if ($this->persona) {
            return "{$this->persona->nombre} {$this->persona->apellido} - {$this->email}";
        }
        return $this->email;
    }
    /*
     * Accessor para el atributo "fullNombre".
     * Si existe una persona asociada, devuelve el nombre completo; de lo contrario, solo el email.
     */
    public function getNombreCompletoAttribute() {
        if ($this->persona) {
            return "{$this->persona->nombre} {$this->persona->apellido}";
        }
        return '';
    }
}

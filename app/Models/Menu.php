<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Menu extends Model
{
    use HasFactory;

    protected $table = 'menus';

    protected $fillable = [
        'nombre',
        'menu_padre_id',
        'url_ref',
        'orden',
        'icon',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Relación con el menu padre
     */
    public function menuPadre(): BelongsTo
    {
        return $this->belongsTo(Menu::class, 'menu_padre_id');
    }

    /**
     * Relación con los menus hijos
     */
    public function menusHijos(): HasMany
    {
        return $this->hasMany(Menu::class, 'menu_padre_id');
    }
    /**
     * Relación con los roles que tienen acceso al menu
     */
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Rol::class, 'roles_menus', 'menu_id', 'rol_id');
    }
}

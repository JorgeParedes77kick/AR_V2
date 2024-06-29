<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsuarioCurriculum extends Model
{
    use HasFactory;

    protected $table = 'usuario_curriculums';

    protected $fillable = [
        'usuario_id',
        'curriculum_id',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}

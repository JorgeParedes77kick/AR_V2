<?php

namespace App\Helpers;

class Debug
{
    public static function info($arg)
    {
        \Debugbar::info($arg);
    }
}

<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class VerifySuperAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
      if(isSuperAdmin())
        return $next($request);
      else
        return redirect()->route('home')->with('response', 'No tienes permisos para acceder a este Modulo');
    }
}

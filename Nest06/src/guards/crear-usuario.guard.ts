import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Observable} from "rxjs/index";
import request = require("superagent");
import {Reflector} from "@nestjs/core";

@Injectable()
export  class CrearUsuarioGuard implements  CanActivate{
    constructor(private readonly reflector: Reflector){

    }
    canActivate(
        context: ExecutionContext)
        : boolean |
        Promise<boolean> |
        Observable<boolean> {

        const request = context.switchToHttp().getRequest();
        const cabeceras = request.headers;
        console.log('Contexto: ', context);
        console.log('Cabeceras: ', request.headers);

        const permisos = this.reflector.get<string[]>(
            'permisos',
            context.getHandler()
        );
        console.log('Permisos: ', permisos);
        if (cabeceras.hola === "Mundo") {
            return true
        } else {
            return false;
        }
    }

}
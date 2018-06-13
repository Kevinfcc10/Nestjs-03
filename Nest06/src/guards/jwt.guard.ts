import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Reflector} from "@nestjs/core";
import {Observable} from "rxjs/index";
import {JwtService} from "../servicios/jwt.service";
import {error} from "util";

@Injectable()
export class JwtGuard implements CanActivate{
    constructor(private readonly reflector: Reflector,
                private readonly _jwtService:JwtService){
    }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();

        const jwt = request.headers.authentication;
        console.log('jwt', jwt);
        if(jwt){
            this._jwtService.verificarToken(jwt,(error,data) => {
                return !error;
            });
        }else{
            return false;
        }
    }

}
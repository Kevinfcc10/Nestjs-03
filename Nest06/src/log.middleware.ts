import {Injectable, MiddlewareFunction, NestMiddleware} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";

@Injectable()
export class LogMiddleware implements  NestMiddleware{
    constructor(private usuarioService: UsuarioService){

    }

    resolve(nombreAplicacion: string, anio: number): MiddlewareFunction {
        return (request, response, next) => {
            const  respuesta = {
                baseUrl:request.baseUrl,
                hostname:request.hostname,
                subdomains:request.hostname,
                ip:request.ip,
                method:request.method,
                originalUrl:request.originalUrl,
                path:request.path,
                protocol:request.protocol,
                headers: request.headers,
            };
            console.log('*** Desde el Middleware ***', nombreAplicacion,anio, this.usuarioService.mostrarUsuario());
            console.log(respuesta);
            next();
        };
    }
}
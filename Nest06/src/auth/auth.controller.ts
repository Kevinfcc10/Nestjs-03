import {BadRequestException, Body, Controller, HttpCode, HttpStatus, Post} from "@nestjs/common";
import {JwtService} from "../servicios/jwt.service";
import {error} from "util";

@Controller('Auth')
export class  AuthController {
    constructor(
        private _jwtService:JwtService
    ){}
    @Post('login')
    @HttpCode(201)
    login(
        @Body('username') username:string,
        @Body('password') password:string
    ){
        const enviaUsername = username;
        const enviaPassword = password;
        const enviaParametros = enviaPassword && enviaUsername;

        if(enviaParametros){
            if(username === 'kevincarate' && password === '1234'){
                const payload = {
                    username: username
                };
                return this._jwtService.emitirToken(payload);
            }else{
                throw new BadRequestException({
                    mensaje: 'credenciales invalidas'
                })
            }
        }else{
            throw new BadRequestException({
                mensaje: 'No envio parametros'
            })
        }
    }

    @Post('verificarJWT')
    @HttpCode(200)
    verificarJWT(
        @Body('jwt') jwt: string,
    ) {
        const tieneParametros = jwt;
        if (tieneParametros) {
            this._jwtService
                .verificarToken(
                    jwt,
                    (error, data) => {
                        if (error) {
                            throw new BadRequestException(
                                {
                                    mensaje: 'Jwt invalido',
                                    error: error
                                }
                            )
                        } else {
                            return {
                                mensaje: 'Ok',
                                data: data
                            }
                        }
                    }
                )
        } else {
            throw new BadRequestException(
                {
                    mensaje: 'No envia jwt'
                }
            )
        }

    }
}
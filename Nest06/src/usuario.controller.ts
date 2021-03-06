//decorator
import {Body, Controller, Get, HttpCode, Post, ReflectMetadata, Req, Res, UseGuards} from "@nestjs/common";
import Status = jest.Status;
import {UsuarioService} from "./usuario.service";
import {UsuarioPipe} from "./pipes/usuario.pipe";
import {USUARIO_SCHEMA} from "./usuario/usuario.schema";
import {CrearUsuarioGuard} from "./guards/crear-usuario.guard";

@Controller('Usuario')
@UseGuards(CrearUsuarioGuard)
export class UsuarioController{
    usuario={
        nombre:'Kevin',
        apellido:'Carate',
        edad:23,
    };
    usuarios = [];
    //@metodo('nombre recurso')

    constructor(private  usuarioService: UsuarioService){

    }

    @HttpCode(202)
    @Get('mostrar')  //@Req () request, @Res () response
    @ReflectMetadata('permisos', ['publico'])
    mostrarUsuario(@Res() response){
        //return (this.usuario);
        const  usuarios = this.usuarioService.mostrarUsuario();
        return response.send(usuarios);
    }

    //@metodo('nombre recurso')
    @Get('mostrarExpress')
    mostrarUsuarioExpress(@Req () request, @Res () response){
        //return response.status(203).send(this.usuario);
        return response.status(203).send(this.usuarios);
    }

    @Post('crearUsuario')
    @ReflectMetadata('permisos', ['privado'])
    crearUsuario(
        @Body(new UsuarioPipe(USUARIO_SCHEMA))
            nuevoUsuario
    ) {
            const  usuarioCreado = this.usuarioService.crearUsuario(nuevoUsuario);

            return nuevoUsuario;
    }

    /*@Post('crearUsuario')
    crearUsuario(@Req () request, @Res () response) {
        const nuevoUsuario = {
            nombre: request.query.nombre,
            apellido: request.query.apellido,
            edad: request.query.edad,
        };
         const usuarioCreado = this.usuarioService.crearUsuario(nuevoUsuario);
        //this.usuarios.push(nuevoUsuario);
        //return response.status(201).send(nuevoUsuario);
        return response.status(201).send(usuarioCreado);
    }*/

}

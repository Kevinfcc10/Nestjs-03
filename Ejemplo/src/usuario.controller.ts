//decorator
import {Controller, Get, HttpCode, Post, Req, Res} from "@nestjs/common";
import Status = jest.Status;

@Controller('Usuario')
export class UsuarioController{
    usuario={
        nombre:'Kevin',
        apellido:'Carate',
        edad:23,
    };
    usuarios = [];
    //@metodo('nombre recurso')
    @HttpCode(202)
    @Get('mostrar')
    //@Req () request, @Res () response
    mostrarUsuario(){
        return (this.usuario);
    }

    //@metodo('nombre recurso')
    @Get('mostrarExpress')
    mostrarUsuarioExpress(@Req () request, @Res () response){
        return response.status(203).send(this.usuario);
    }
    @Post('crearUsuario')
    crearUsuario(@Req () request, @Res () response) {
        const nuevoUsuario = {
            nombre: request.query.nombre,
            apellido: request.query.apellido,
            edad: request.query.edad,
        };
        this.usuarios.push(nuevoUsuario);
        return response.status(201).send(nuevoUsuario);
    }

}
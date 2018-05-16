import {Injectable} from "@nestjs/common";

@Injectable()
export class UsuarioService {
    usuarios:Usuario[]=[];
    crearUsuario(usuario:Usuario): Usuario{
        this.usuarios.push(usuario);
        return usuario;
    }

    mostrarUsuario(): Usuario[] {
        return this.usuarios;
    }

}

export interface Usuario {
    nombre:string
    apellido:string
    edad:number
}
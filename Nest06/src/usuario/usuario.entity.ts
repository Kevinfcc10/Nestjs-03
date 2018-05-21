import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {FotoEntity} from "../fotos/foto.entity";

@Entity('web_caratec_usuario')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({length: 50})
    nombre: string;

    @OneToMany(
        type => FotoEntity,
        fotoEntity => fotoEntity.usuarioId)
    fotos: FotoEntity[];
}
import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from "@nestjs/common";
import * as Joi from 'joi';
import {PeticionExceptionException} from "../exceptions/peticion-exception.exception";

@Injectable()
//Validacion PIPE
export class UsuarioPipe implements PipeTransform {
    constructor (private readonly _schema){
    }
    transform(jsonAValidar: any, metadata: ArgumentMetadata){
        const  {
            error
        }= Joi.validate(jsonAValidar, this._schema)
        if(error){
          //botar un error
            throw  new PeticionExceptionException(
                {
                    erorr: error,
                    mensaje: 'Json no valido'
                },
                10
            )
        } else{
            //
            return jsonAValidar;
        }
    }
}
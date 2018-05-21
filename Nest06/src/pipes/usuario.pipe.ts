import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import * as Joi from 'joi';
@Injectable()
export class UsuarioPipe implements PipeTransform {
    transform(value: any,metadata:
    ArgumentMetadata){
        const schema = Joi
            .object()
            .keys({
                nombre:Joi
                    .string()
                    .alphanum()
                    .min(3)
                    .max(30)
                    .require(),
                apellido: Joi
                    .string()
                    .alphanum()
                    .min(3)
                    .max(30)
                    .require(),
                edad: Joi
                    .number()
                    .integer()
                    .greater(0)
                    .less(150),
            })
    }
}
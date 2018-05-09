import {Body, Controller, Get, Headers, Param, Post, Req, Res} from "@nestjs/common";
import {Query} from "@nestjs/common/utils/decorators/route-params.decorator";
import {request} from "http";

@Controller('Parametros')
export class ParametrosController{
    @Post('devolver/:id/:modelo')
    devolverParametros(
        @Req() request,
        @Res() response,
        @Query() queryParams,
        @Body() bodyParams,
        @Param() paramsParams

    ){
        const respuesta = {
            queryParams: queryParams,
            bodyParams: bodyParams,
            paramsParams: paramsParams
        };
        return response.send(respuesta)
    }
    @Get('ReqRes')
    requestResponse(
        @Req() request,
        @Res() response,
        @Headers() headers
    ){
        const  respuesta = {
            baseUrl:request.baseUrl,
            hostname:request.hostname,
            subdomains:request.hostname,
            ip:request.ip,
            method:request.method,
            originalUrl:request.originalUrl,
            path:request.path,
            protocol:request.protocol,
            headers,
        };
        console.log(respuesta);
        return response.redirect('/Usuario/mostrar');
        //return response.send(respuesta);
    }

}

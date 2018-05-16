import {Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsuarioService} from "./usuario.service";
import {UsuarioController} from "./usuario.controller";
import {ParametrosController} from "./parametros.controller";
import {MiddlewaresConsumer} from "@nestjs/common/interfaces/middlewares";
import {LogMiddleware} from "./log.middleware";

@Module({
  imports: [],
  controllers: [AppController, UsuarioController, ParametrosController],
  providers: [AppService, UsuarioService],
})
export class AppModule implements NestModule {
    nombreDeLaAplicacion = 'EPN';

    configure(consumer: MiddlewaresConsumer): void {
        consumer
            .apply(LogMiddleware)
            .with(this.nombreDeLaAplicacion, 1995)
            .forRoutes(
                AppController, UsuarioController, ParametrosController
            );
        //.apply(OtroMiddleware)
        //.forRoutes(Otras rutas);
    }
}


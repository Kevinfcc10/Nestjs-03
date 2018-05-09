import {MiddlewaresConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {UsuarioController} from "./usuario.controller";
import {ParametrosController} from "./parametros.controller";
import {LogMiddleware} from "./log.middleware";

@Module({
    imports: [],
    controllers: [AppController, UsuarioController, ParametrosController],
    components: [],
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

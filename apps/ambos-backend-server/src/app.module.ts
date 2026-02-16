import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { OrderStatusModule } from "./orderStatus/orderStatus.module";
import { CartModule } from "./cart/cart.module";
import { OrderModule } from "./order/order.module";
import { ProductModule } from "./product/product.module";
import { ModelModule } from "./model/model.module";
import { UsuarioModule } from "./usuario/usuario.module";
import { ProductoModule } from "./producto/producto.module";
import { PedidoModule } from "./pedido/pedido.module";
import { OrdenDeCompraModule } from "./ordenDeCompra/ordenDeCompra.module";
import { TalleModule } from "./talle/talle.module";
import { CarritoModule } from "./carrito/carrito.module";
import { ColorModule } from "./color/color.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    UserModule,
    OrderStatusModule,
    CartModule,
    OrderModule,
    ProductModule,
    ModelModule,
    UsuarioModule,
    ProductoModule,
    PedidoModule,
    OrdenDeCompraModule,
    TalleModule,
    CarritoModule,
    ColorModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}

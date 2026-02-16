import { Module } from "@nestjs/common";
import { CarritoModuleBase } from "./base/carrito.module.base";
import { CarritoService } from "./carrito.service";
import { CarritoController } from "./carrito.controller";
import { CarritoResolver } from "./carrito.resolver";

@Module({
  imports: [CarritoModuleBase],
  controllers: [CarritoController],
  providers: [CarritoService, CarritoResolver],
  exports: [CarritoService],
})
export class CarritoModule {}

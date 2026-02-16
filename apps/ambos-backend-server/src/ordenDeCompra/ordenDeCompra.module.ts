import { Module } from "@nestjs/common";
import { OrdenDeCompraModuleBase } from "./base/ordenDeCompra.module.base";
import { OrdenDeCompraService } from "./ordenDeCompra.service";
import { OrdenDeCompraController } from "./ordenDeCompra.controller";
import { OrdenDeCompraResolver } from "./ordenDeCompra.resolver";

@Module({
  imports: [OrdenDeCompraModuleBase],
  controllers: [OrdenDeCompraController],
  providers: [OrdenDeCompraService, OrdenDeCompraResolver],
  exports: [OrdenDeCompraService],
})
export class OrdenDeCompraModule {}

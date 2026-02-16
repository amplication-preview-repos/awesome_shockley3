import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrdenDeCompraService } from "./ordenDeCompra.service";
import { OrdenDeCompraControllerBase } from "./base/ordenDeCompra.controller.base";

@swagger.ApiTags("ordenDeCompras")
@common.Controller("ordenDeCompras")
export class OrdenDeCompraController extends OrdenDeCompraControllerBase {
  constructor(protected readonly service: OrdenDeCompraService) {
    super(service);
  }
}

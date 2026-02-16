import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CarritoService } from "./carrito.service";
import { CarritoControllerBase } from "./base/carrito.controller.base";

@swagger.ApiTags("carritos")
@common.Controller("carritos")
export class CarritoController extends CarritoControllerBase {
  constructor(protected readonly service: CarritoService) {
    super(service);
  }
}

import * as graphql from "@nestjs/graphql";
import { CarritoResolverBase } from "./base/carrito.resolver.base";
import { Carrito } from "./base/Carrito";
import { CarritoService } from "./carrito.service";

@graphql.Resolver(() => Carrito)
export class CarritoResolver extends CarritoResolverBase {
  constructor(protected readonly service: CarritoService) {
    super(service);
  }
}

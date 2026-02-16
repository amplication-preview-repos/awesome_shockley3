import * as graphql from "@nestjs/graphql";
import { OrdenDeCompraResolverBase } from "./base/ordenDeCompra.resolver.base";
import { OrdenDeCompra } from "./base/OrdenDeCompra";
import { OrdenDeCompraService } from "./ordenDeCompra.service";

@graphql.Resolver(() => OrdenDeCompra)
export class OrdenDeCompraResolver extends OrdenDeCompraResolverBase {
  constructor(protected readonly service: OrdenDeCompraService) {
    super(service);
  }
}

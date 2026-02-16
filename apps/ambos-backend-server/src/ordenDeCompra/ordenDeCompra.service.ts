import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrdenDeCompraServiceBase } from "./base/ordenDeCompra.service.base";

@Injectable()
export class OrdenDeCompraService extends OrdenDeCompraServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

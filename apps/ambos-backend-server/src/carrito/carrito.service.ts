import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CarritoServiceBase } from "./base/carrito.service.base";

@Injectable()
export class CarritoService extends CarritoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TalleServiceBase } from "./base/talle.service.base";

@Injectable()
export class TalleService extends TalleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

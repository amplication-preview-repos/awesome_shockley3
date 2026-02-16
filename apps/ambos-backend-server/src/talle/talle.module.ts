import { Module } from "@nestjs/common";
import { TalleModuleBase } from "./base/talle.module.base";
import { TalleService } from "./talle.service";
import { TalleController } from "./talle.controller";
import { TalleResolver } from "./talle.resolver";

@Module({
  imports: [TalleModuleBase],
  controllers: [TalleController],
  providers: [TalleService, TalleResolver],
  exports: [TalleService],
})
export class TalleModule {}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TalleService } from "./talle.service";
import { TalleControllerBase } from "./base/talle.controller.base";

@swagger.ApiTags("talles")
@common.Controller("talles")
export class TalleController extends TalleControllerBase {
  constructor(protected readonly service: TalleService) {
    super(service);
  }
}

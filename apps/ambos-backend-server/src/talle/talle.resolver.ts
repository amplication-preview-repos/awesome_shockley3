import * as graphql from "@nestjs/graphql";
import { TalleResolverBase } from "./base/talle.resolver.base";
import { Talle } from "./base/Talle";
import { TalleService } from "./talle.service";

@graphql.Resolver(() => Talle)
export class TalleResolver extends TalleResolverBase {
  constructor(protected readonly service: TalleService) {
    super(service);
  }
}

import * as graphql from "@nestjs/graphql";
import { ExtraInfoResolverBase } from "./base/extraInfo.resolver.base";
import { ExtraInfo } from "./base/ExtraInfo";
import { ExtraInfoService } from "./extraInfo.service";

@graphql.Resolver(() => ExtraInfo)
export class ExtraInfoResolver extends ExtraInfoResolverBase {
  constructor(protected readonly service: ExtraInfoService) {
    super(service);
  }
}

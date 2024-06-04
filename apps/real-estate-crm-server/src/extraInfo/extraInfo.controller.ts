import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExtraInfoService } from "./extraInfo.service";
import { ExtraInfoControllerBase } from "./base/extraInfo.controller.base";

@swagger.ApiTags("extraInfos")
@common.Controller("extraInfos")
export class ExtraInfoController extends ExtraInfoControllerBase {
  constructor(protected readonly service: ExtraInfoService) {
    super(service);
  }
}

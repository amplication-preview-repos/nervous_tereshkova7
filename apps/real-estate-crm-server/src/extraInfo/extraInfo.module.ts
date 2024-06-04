import { Module } from "@nestjs/common";
import { ExtraInfoModuleBase } from "./base/extraInfo.module.base";
import { ExtraInfoService } from "./extraInfo.service";
import { ExtraInfoController } from "./extraInfo.controller";
import { ExtraInfoResolver } from "./extraInfo.resolver";

@Module({
  imports: [ExtraInfoModuleBase],
  controllers: [ExtraInfoController],
  providers: [ExtraInfoService, ExtraInfoResolver],
  exports: [ExtraInfoService],
})
export class ExtraInfoModule {}

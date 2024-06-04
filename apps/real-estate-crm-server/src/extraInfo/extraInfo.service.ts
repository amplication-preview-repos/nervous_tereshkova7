import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExtraInfoServiceBase } from "./base/extraInfo.service.base";

@Injectable()
export class ExtraInfoService extends ExtraInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

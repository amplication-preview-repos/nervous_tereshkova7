/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Property as PrismaProperty,
  Appointment as PrismaAppointment,
  Assignment as PrismaAssignment,
  ExtraInfo as PrismaExtraInfo,
} from "@prisma/client";

export class PropertyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PropertyCountArgs, "select">): Promise<number> {
    return this.prisma.property.count(args);
  }

  async properties<T extends Prisma.PropertyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PropertyFindManyArgs>
  ): Promise<PrismaProperty[]> {
    return this.prisma.property.findMany<Prisma.PropertyFindManyArgs>(args);
  }
  async property<T extends Prisma.PropertyFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PropertyFindUniqueArgs>
  ): Promise<PrismaProperty | null> {
    return this.prisma.property.findUnique(args);
  }
  async createProperty<T extends Prisma.PropertyCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PropertyCreateArgs>
  ): Promise<PrismaProperty> {
    return this.prisma.property.create<T>(args);
  }
  async updateProperty<T extends Prisma.PropertyUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PropertyUpdateArgs>
  ): Promise<PrismaProperty> {
    return this.prisma.property.update<T>(args);
  }
  async deleteProperty<T extends Prisma.PropertyDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PropertyDeleteArgs>
  ): Promise<PrismaProperty> {
    return this.prisma.property.delete(args);
  }

  async findAppointments(
    parentId: string,
    args: Prisma.AppointmentFindManyArgs
  ): Promise<PrismaAppointment[]> {
    return this.prisma.property
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .appointments(args);
  }

  async findAssignments(
    parentId: string,
    args: Prisma.AssignmentFindManyArgs
  ): Promise<PrismaAssignment[]> {
    return this.prisma.property
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .assignments(args);
  }

  async findExtraInfos(
    parentId: string,
    args: Prisma.ExtraInfoFindManyArgs
  ): Promise<PrismaExtraInfo[]> {
    return this.prisma.property
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .extraInfos(args);
  }
}

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AssignmentService } from "../assignment.service";
import { AssignmentCreateInput } from "./AssignmentCreateInput";
import { Assignment } from "./Assignment";
import { AssignmentFindManyArgs } from "./AssignmentFindManyArgs";
import { AssignmentWhereUniqueInput } from "./AssignmentWhereUniqueInput";
import { AssignmentUpdateInput } from "./AssignmentUpdateInput";

export class AssignmentControllerBase {
  constructor(protected readonly service: AssignmentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Assignment })
  async createAssignment(
    @common.Body() data: AssignmentCreateInput
  ): Promise<Assignment> {
    return await this.service.createAssignment({
      data: {
        ...data,

        agent: data.agent
          ? {
              connect: data.agent,
            }
          : undefined,

        property: data.property
          ? {
              connect: data.property,
            }
          : undefined,
      },
      select: {
        agent: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        property: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Assignment] })
  @ApiNestedQuery(AssignmentFindManyArgs)
  async assignments(@common.Req() request: Request): Promise<Assignment[]> {
    const args = plainToClass(AssignmentFindManyArgs, request.query);
    return this.service.assignments({
      ...args,
      select: {
        agent: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        property: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Assignment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async assignment(
    @common.Param() params: AssignmentWhereUniqueInput
  ): Promise<Assignment | null> {
    const result = await this.service.assignment({
      where: params,
      select: {
        agent: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        property: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Assignment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAssignment(
    @common.Param() params: AssignmentWhereUniqueInput,
    @common.Body() data: AssignmentUpdateInput
  ): Promise<Assignment | null> {
    try {
      return await this.service.updateAssignment({
        where: params,
        data: {
          ...data,

          agent: data.agent
            ? {
                connect: data.agent,
              }
            : undefined,

          property: data.property
            ? {
                connect: data.property,
              }
            : undefined,
        },
        select: {
          agent: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          property: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Assignment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAssignment(
    @common.Param() params: AssignmentWhereUniqueInput
  ): Promise<Assignment | null> {
    try {
      return await this.service.deleteAssignment({
        where: params,
        select: {
          agent: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          property: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
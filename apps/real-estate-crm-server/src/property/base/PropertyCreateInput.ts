/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsEnum,
  ValidateNested,
  IsBoolean,
  IsNumber,
  IsInt,
} from "class-validator";
import { EnumPropertyAmenities } from "./EnumPropertyAmenities";
import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { Type } from "class-transformer";
import { AssignmentCreateNestedManyWithoutPropertiesInput } from "./AssignmentCreateNestedManyWithoutPropertiesInput";
import { ExtraInfoCreateNestedManyWithoutPropertiesInput } from "./ExtraInfoCreateNestedManyWithoutPropertiesInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumPropertyStatus } from "./EnumPropertyStatus";
import { EnumPropertyTypeField } from "./EnumPropertyTypeField";

@InputType()
class PropertyCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumPropertyAmenities,
    isArray: true,
  })
  @IsEnum(EnumPropertyAmenities, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumPropertyAmenities], {
    nullable: true,
  })
  amenities?: Array<"Option1">;

  @ApiProperty({
    required: false,
    type: () => AppointmentCreateNestedManyWithoutPropertiesInput,
  })
  @ValidateNested()
  @Type(() => AppointmentCreateNestedManyWithoutPropertiesInput)
  @IsOptional()
  @Field(() => AppointmentCreateNestedManyWithoutPropertiesInput, {
    nullable: true,
  })
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;

  @ApiProperty({
    required: false,
    type: () => AssignmentCreateNestedManyWithoutPropertiesInput,
  })
  @ValidateNested()
  @Type(() => AssignmentCreateNestedManyWithoutPropertiesInput)
  @IsOptional()
  @Field(() => AssignmentCreateNestedManyWithoutPropertiesInput, {
    nullable: true,
  })
  assignments?: AssignmentCreateNestedManyWithoutPropertiesInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  beachAccess?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => ExtraInfoCreateNestedManyWithoutPropertiesInput,
  })
  @ValidateNested()
  @Type(() => ExtraInfoCreateNestedManyWithoutPropertiesInput)
  @IsOptional()
  @Field(() => ExtraInfoCreateNestedManyWithoutPropertiesInput, {
    nullable: true,
  })
  extraInfos?: ExtraInfoCreateNestedManyWithoutPropertiesInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  media?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  rooms?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumPropertyStatus,
  })
  @IsEnum(EnumPropertyStatus)
  @IsOptional()
  @Field(() => EnumPropertyStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumPropertyTypeField,
  })
  @IsEnum(EnumPropertyTypeField)
  @IsOptional()
  @Field(() => EnumPropertyTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;
}

export { PropertyCreateInput as PropertyCreateInput };
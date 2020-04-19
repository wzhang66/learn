import { InputType, Field } from "@nestjs/graphql";
import {MinLength, IsDateString} from "class-validator";

@InputType()
export class PathInput {
    @MinLength(1)
    @Field()
    name:string;

    @IsDateString()
    @Field()
    createAt:string;
};
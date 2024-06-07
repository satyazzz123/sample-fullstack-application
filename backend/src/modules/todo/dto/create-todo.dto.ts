import { IsEnum, IsString } from "class-validator";
import { Status } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTodoDto {
    @ApiProperty()
    @IsString()
    body: string;

    @ApiProperty({type: 'enum', enum: ['PENDING', 'DONE']})
    @IsEnum(['PENDING', 'DONE'])
    status: Status;
}

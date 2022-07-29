import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { BrandName, ShoesStatus } from '../../database/models/entities';

export class AddNewShoesDto {
  @ApiProperty({ required: true, type: 'string' })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  name: string;

  @ApiProperty({ required: true, type: 'string' })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  code: string;

  @ApiProperty({ required: true, type: 'string' })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  imageUrl: string;

  @ApiProperty({ required: true, type: 'enum', enum: BrandName })
  @IsNotEmpty()
  @IsEnum(BrandName)
  brand: BrandName;

  @ApiProperty({ required: true, type: 'number' })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  size: number;

  @ApiProperty({ required: true, type: 'number' })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  price: number;

  @ApiProperty({ required: true, type: 'number' })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  total: number;

  @ApiProperty({
    required: true,
    type: 'enum',
    enum: ShoesStatus,
    default: ShoesStatus.ACTIVE,
  })
  @IsEnum(ShoesStatus)
  status: ShoesStatus;

  @ApiProperty({ required: false, type: 'string', nullable: true })
  @IsOptional()
  @IsString()
  description: string;
}

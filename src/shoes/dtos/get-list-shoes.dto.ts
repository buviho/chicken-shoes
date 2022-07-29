import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { BrandName } from 'src/database/models/shoes.entity';

export enum OrderShoes {
  PRICE_LOW_TO_HIGH = 'PRICE_LOW_TO_HIGH',
  PRICE_HIGH_TO_LOW = 'PRICE_HIGH_TO_LOW',
  OLDEST = 'OLDEST',
  NEWEST = 'NEWEST',
}
export class GetListShoesDto {
  @ApiProperty({ required: false, type: 'enum', enum: BrandName })
  @IsOptional()
  @IsEnum(BrandName)
  brand: BrandName;

  @ApiProperty({ required: false, type: 'decimal' })
  @IsOptional()
  size: number;

  @ApiProperty({ required: false, type: 'number', description: 'Price from' })
  @IsOptional()
  @IsNumber()
  fromPrice: number;

  @ApiProperty({ required: false, type: 'number', description: 'Price to' })
  @IsOptional()
  @IsNumber()
  toPrice: number;

  @ApiProperty({ required: false, type: 'varchar' })
  @IsOptional()
  @IsString()
  keyword: string;

  @ApiProperty({ required: false, type: 'number', default: 10 })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  limit: number;

  @ApiProperty({ required: false, type: 'number', default: 0 })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  offset: number;
}

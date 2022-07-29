import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from '../common/classes/api-result';
import { AddNewShoesDto } from './dtos/add-new-shoes.dto';
import { ShoesService } from './shoes.service';

@Controller('shoes')
@ApiTags('Shoes')
export class ShoesController {
  constructor(private readonly shoesService: ShoesService) {}
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async addNewShoes(@Body() data: AddNewShoesDto) {
    const dataResponse = await this.shoesService.addNewShoes(data);
    return new ApiResult().success(dataResponse);
  }
}

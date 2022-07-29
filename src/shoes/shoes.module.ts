import { Module } from '@nestjs/common';
import { ShoesService } from './shoes.service';
import { ShoesController } from './shoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shoes } from 'src/database/models/shoes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shoes])],
  providers: [ShoesService],
  controllers: [ShoesController],
})
export class ShoesModule {}

import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';
import { ShoesModule } from './shoes/shoes.module';
@Module({
  imports: [CommonModule, DatabaseModule, ShoesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

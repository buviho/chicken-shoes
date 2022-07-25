import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [CommonModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

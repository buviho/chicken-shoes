import { Module } from '@nestjs/common';
import { ConfigService } from './services/config.service';

@Module({
  imports: [],
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(`.env`),
    },
  ],
  exports: [ConfigService],
})
export class CommonModule {}

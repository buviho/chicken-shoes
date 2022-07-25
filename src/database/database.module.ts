import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { ConfigService } from '../common/services/config.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [CommonModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.db.host,
        port: configService.db.port,
        username: configService.db.user,
        password: configService.db.pass,
        database: configService.db.name,
        entities: [__dirname + '/**/models/*.entity{.ts,.js}'],
        logging: false,
        synchronize: false,
        migrationsRun: true,
        migrations: [
          __dirname + '/**/migrations/*{.ts,.js}',
          __dirname + '/**/seedings/*{.ts,.js}',
        ],
        cli: {
          migrationsDir: 'src/database/migrations',
        },
      }),
    }),
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}

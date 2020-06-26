import { Module, HttpModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseModule } from './controllers/base.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from '@poc/environments';
import { Entities } from './constants';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: environment.db_host,
      username: environment.db_username,
      password: environment.db_password,
      database: environment.database,
      synchronize: environment.synchronize,
      migrationsRun: environment.migrationsRun, //when a new @Entity is created 'll need to run migrations.
      logging: environment.logging,
      entities: Entities
      // options: { encrypt: environment.encrypt }
    }),
    BaseModule,
    // EntitiesModule
    TypeOrmModule.forFeature(Entities)
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

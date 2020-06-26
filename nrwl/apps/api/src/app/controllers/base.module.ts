import {
  Module,
  HttpModule
} from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Entities } from '../constants';
import { EntitiesModule } from '../entities/entities.module';
import { AuthService } from '../services/auth.service';
import { EventsModule } from '../events/events.module';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature(Entities),
    // EntitiesModule,
    EventsModule
  ],
  providers: [AuthService],
  controllers: []
})
export class BaseModule {

}

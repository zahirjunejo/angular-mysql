import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entities } from '../constants';

const Services = [];

@Module({
  imports: [TypeOrmModule.forFeature(Entities)],
  providers: Services,
  exports: Services
})
export class EntitiesModule {}
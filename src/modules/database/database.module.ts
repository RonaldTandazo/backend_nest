import { Module } from '@nestjs/common';
import { databaseProviders } from '../../config/database';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './config/database';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormModule } from './modules/form/form.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    FormModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

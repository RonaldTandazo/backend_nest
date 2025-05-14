import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormController } from './controllers/form.controller';
import { FormService } from './services/form.service';
import { databaseConfig } from './config/database';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormEntity } from './entities/form/form.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([FormEntity])
  ],
  controllers: [AppController, FormController],
  providers: [AppService, FormService],
})
export class AppModule {}

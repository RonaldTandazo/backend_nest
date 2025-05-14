import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './modules/form/form.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [
    FormModule,
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

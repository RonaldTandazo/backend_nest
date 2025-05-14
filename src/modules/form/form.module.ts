import { Module } from '@nestjs/common';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { DatabaseModule } from '../database/database.module';
import { formProviders } from './form.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [FormController],
    providers: [
        ...formProviders,
        FormService
    ],
})
export class FormModule {}

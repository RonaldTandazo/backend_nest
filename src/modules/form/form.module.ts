import { Module } from '@nestjs/common';
import { FormController } from '../../controllers/form.controller';
import { FormService } from '../../services/form.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormEntity } from '../../entities/form/form.entity';

@Module({
    imports: [TypeOrmModule.forFeature([FormEntity])],
    controllers: [FormController],
    providers: [FormService],
})
export class FormModule {}

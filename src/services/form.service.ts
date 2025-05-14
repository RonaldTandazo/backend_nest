import { HttpStatus, Injectable } from '@nestjs/common';
import { success, error } from '../utils/response';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FormEntity } from '../entities/form/form.entity';

@Injectable()
export class FormService {
    constructor(
        @InjectRepository(FormEntity)
        private readonly formRepository: Repository<FormEntity>
    ){}

    getOptions(){
        const options = ['Agent', 'Main Corp', 'Option 3'];

        try {
            return success("Options Obtained", options, HttpStatus.OK);
        } catch (e) {
            return error(e.message || "Error Obtaining Options", e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async store(data) {
        try {
            const newForm = this.formRepository.create(data);
            const savedForm = await this.formRepository.save(newForm);
            return success("Record Saved", savedForm, HttpStatus.CREATED);
        } catch (e) {
            return error(e.message || "Error While Saving Data", e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

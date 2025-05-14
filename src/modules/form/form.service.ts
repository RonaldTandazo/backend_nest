import { HttpStatus, Injectable, Inject } from '@nestjs/common';
import { success, error } from '../../utils/response';
import { Repository } from 'typeorm';
import { FormEntity } from './form.entity';
import { FormDTO } from './store-form.dto';

@Injectable()
export class FormService {
    constructor(
        @Inject('FORM_REPOSITORY')
        private formRepository: Repository<FormEntity>
    ){}

    getOptions(){
        const options = ['Agent', 'Main Corp', 'Option 3'];

        try {
            return success("Options Obtained", options, HttpStatus.OK);
        } catch (e) {
            return error(e.message || "Error Obtaining Options", e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async verifyByEmail(email: string) {
        try {
            const existingRecord = await this.formRepository.findOne({ where: { email } });

            return success("Verification Completed", existingRecord, HttpStatus.OK);
        } catch (e) {
            return error(e.message || "Error While Veryfing", e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async verifyByName(name: string) {
        try {
            const existingRecord = await this.formRepository.findOne({ where: { name } });

            return success("Verification Completed", existingRecord, HttpStatus.CREATED);
        } catch (e) {
            return error(e.message || "Error While Veryfing", e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async store(data: FormDTO) {
        try {
            const newForm = this.formRepository.create(data);
            const savedForm = await this.formRepository.save(newForm);
            return success("Record Saved", savedForm, HttpStatus.CREATED);
        } catch (e) {
            return error(e.message || "Error While Saving Data", e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

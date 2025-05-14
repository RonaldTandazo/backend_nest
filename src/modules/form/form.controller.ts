import { Body, Controller, Get, Post } from '@nestjs/common';
import { FormService } from './form.service';
import { FormDTO } from './store-form.dto';

@Controller('form')
export class FormController {
    constructor(private readonly formService: FormService) {}

    @Get('options')
    getOptions() {
        try {
            const data = this.formService.getOptions();
            if(!data.ok) throw data;

            return {
                ok: data.ok,
                message: data.message,
                data: data.data,
                status: data.status
            }
        } catch (error) {
            return {
                ok: error.ok,
                error: error.error,
                message: error.message,
                status: error.status
            }
        }
    }

    @Post('save')
    async store(@Body() data:FormDTO) {
        try {
            const verifyByName = await this.formService.verifyByName(data.name);
            if(verifyByName.data){

            }

            const verifyByEmail = await this.formService.verifyByEmail(data.email);
            if(verifyByEmail.ok){
                
            }

            const store = await this.formService.store(data);
            if(!store.ok) throw store;

            return {
                ok: store.ok,
                message: store.message,
                data: store.data,
                status: store.status
            };
        } catch (error) {
            return {
                ok: error.ok,
                error: error.error,
                message: error.message,
                status: error.status
            };
        }
    }
}
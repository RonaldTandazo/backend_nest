
import { DataSource } from 'typeorm';
import { FormEntity } from './form.entity';

export const formProviders = [
    {
        provide: 'FORM_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(FormEntity),
        inject: ['DATA_SOURCE'],
    },
];

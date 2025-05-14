import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { FormEntity } from '../entities/form/form.entity';
import { config } from 'dotenv';

config();

export const databaseConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || "5432"),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [FormEntity],
    synchronize: process.env.NODE_ENV === 'development',
};
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('form_data')
export class FormEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, nullable: false })
    name: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: true })
    option: string;
}
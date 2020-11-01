import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Account {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ default: '', unique: true })
    email: string;

    @Column({ default: '' })
    password: string;

    @Column({ default: '' })
    verify_token: string;
}

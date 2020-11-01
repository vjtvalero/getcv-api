import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

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

    @BeforeInsert() async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './account.dto';
import { Account } from './account.entity';

@Injectable()
export class AccountService {
    constructor(
        @InjectRepository(Account)
        private accountRepository: Repository<Account>,
    ) { }

    findOne(id: number): Promise<Account> {
        return this.accountRepository.findOne(id);
    }

    create(accountDetails: CreateAccountDto): Account {
        const newAccount = this.accountRepository.create(accountDetails);
        this.accountRepository.save(newAccount);
        return newAccount;
    }
}

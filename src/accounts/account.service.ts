import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountsService {
    createAccount(): string {
        return 'Account created.';
    }
}

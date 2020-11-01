import { Body, Controller, Get, Headers, HttpCode, Post, Redirect, ValidationPipe } from '@nestjs/common';
import { AccountsService } from './account.service';
import { CreateAccountDto } from './account.dto';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService) { }

    @Post('new')
    create(@Headers() headers, @Body() body: CreateAccountDto): string {
        console.log(`body: ${JSON.stringify(body)}`);
        return this.accountsService.createAccount();
    }

    @Get('verify')
    verify(@Headers() headers, @Body() body): string {
        return 'verify your account here';
    }
}

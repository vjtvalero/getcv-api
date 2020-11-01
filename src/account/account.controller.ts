import { Body, Controller, Get, Headers, HttpCode, Param, Post, Redirect, ValidationPipe } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './account.dto';
import { Account } from './account.entity';

@Controller('account')
export class AccountController {
    constructor(private readonly service: AccountService) { }

    @Post('new')
    create(@Headers() headers, @Body() body: CreateAccountDto): string {
        console.log(`body: ${JSON.stringify(body)}`);
        return this.service.createAccount();
    }

    @Get('verify')
    verify(@Headers() headers, @Body() body): string {
        return 'verify your account here';
    }

    @Get(':id')
    async findOne(@Param() params): Promise<Account> {
        return await this.service.findOne(params.id);
    }
}

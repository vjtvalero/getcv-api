import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './account.dto';
import { Account } from './account.entity';

@Controller('account')
export class AccountController {
    constructor(private readonly service: AccountService) { }

    @Post('new')
    create(@Body() createAccountDto: CreateAccountDto): Account {
        return this.service.create(createAccountDto);
    }

    @Get('verify')
    verify(@Body() body): string {
        return 'verify your account here';
    }

    @Get('find/:id')
    async findOne(@Param() params: { id: number; }): Promise<Account> {
        return await this.service.findOne(params.id);
    }
}

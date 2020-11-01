import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './account.dto';
import { Account } from './account.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

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

    @UseGuards(JwtAuthGuard)
    @Get('find/:email')
    async findOne(@Param() params: { email: string; }): Promise<Account> {
        return await this.service.findOne(params.email);
    }
}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import env from 'config/env';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsController } from './accounts/accounts.controller';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [env]
        })
    ],
    controllers: [AppController, AccountsController],
    providers: [AppService],
})
export class AppModule { }

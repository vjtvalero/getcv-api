import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import env from 'config/env';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsController } from './accounts/account.controller';
import { AccountsService } from './accounts/account.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Account } from './accounts/account.entity';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [env]
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'getcv',
            entities: [Account],
            synchronize: true,
        })
    ],
    controllers: [AppController, AccountsController],
    providers: [AppService, AccountsService],
})
export class AppModule {
    constructor(private connection: Connection) { }
}

import { Test, TestingModule } from '@nestjs/testing';
import { AccountsController } from './account.controller';
import { AccountsService } from './account.service';

describe('AccountsController', () => {
    let controller: AccountsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AccountsController],
            providers: [
                {
                    provide: AccountsService,
                    useValue: {
                        createAccount: jest.fn()
                    }
                }
            ]
        }).compile();

        controller = module.get<AccountsController>(AccountsController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

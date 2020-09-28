import { AccountModel } from './../entity/account';
import { AccountService } from "./account.service";
import { AccountInput } from 'src/inputs/account-input';
import { SurveyInput } from 'src/inputs/survey-input';
export declare class AccountResolver {
    private accountService;
    constructor(accountService: AccountService);
    getAllAccounts(take: number, skip: number): Promise<AccountModel[]>;
    createUpdateAccount(createUpdate: AccountInput): Promise<AccountInput>;
    getAllSurvey(take: number, skip: number): Promise<AccountModel[]>;
    createUpdateSurvey(createUpdate: SurveyInput): Promise<SurveyInput>;
}

import { QuestionInput } from './../inputs/question-inputs';
import { QuestionsModel } from './../entity/questions';
import { AccountModel } from './../entity/account';
import { AccountService } from "./account.service";
import { AccountInput } from 'src/inputs/account-input';
import { SurveyModel } from 'src/entity/survey';
import { SurveyInput } from 'src/inputs/survey-input';
export declare class AccountResolver {
    private accountService;
    constructor(accountService: AccountService);
    getAllAccounts(take: number, skip: number): Promise<AccountModel[]>;
    createUpdateAccount(createUpdate: AccountInput): Promise<AccountInput>;
    getAllSurvey(take: number, skip: number): Promise<AccountModel[]>;
    getCredentials(user_id: string, password: string): Promise<AccountModel>;
    createUpdateSurvey(createUpdate: SurveyInput): Promise<SurveyModel>;
    getAllQuestions(take: number, skip: number): Promise<QuestionsModel[]>;
    createUpdateQuestion(createUpdateQuestion: QuestionInput): Promise<QuestionsModel>;
}

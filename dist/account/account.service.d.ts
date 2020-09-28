import { SurveyInput } from './../inputs/survey-input';
import { SurveyModel } from 'src/entity/survey';
import { AccountModel } from 'src/entity/account';
import RepositoryService from "src/repository/repository.service";
import { AccountInput } from 'src/inputs/account-input';
export declare class AccountService {
    private repositoryService;
    constructor(repositoryService: RepositoryService);
    findAll(take: number, skip: number): Promise<AccountModel[]>;
    createUpdate(accountInput: AccountInput): Promise<AccountModel>;
    findAllSurvey(take: number, skip: number): Promise<SurveyModel[]>;
    createUpdateSurvey(surveyInput: SurveyInput): Promise<SurveyModel>;
}

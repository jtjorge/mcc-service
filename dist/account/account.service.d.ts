import { NotificationInput } from './../inputs/notification';
import { NotificationModel } from './../entity/notification';
import { QuestionInput } from './../inputs/question-inputs';
import { QuestionsModel } from './../entity/questions';
import { SurveyInput } from './../inputs/survey-input';
import { SurveyModel } from 'src/entity/survey';
import { AccountModel } from 'src/entity/account';
import RepositoryService from "src/repository/repository.service";
import { AccountInput } from 'src/inputs/account-input';
import { AccountManageStore } from 'src/entity/response-storage/AccountManageStore';
export declare class AccountService {
    private repositoryService;
    constructor(repositoryService: RepositoryService);
    findAll(take: number, skip: number): Promise<AccountModel[]>;
    getAllSurvey(level: number, uniqueNumber: string, fromToDate: string): Promise<SurveyModel[]>;
    findAllManagedAccounts(take: number, skip: number, user_level: string, keyword: string): Promise<AccountManageStore>;
    findDistictAccount(): Promise<AccountModel[]>;
    login(username: string, password: string): Promise<AccountModel>;
    createUpdate(accountInput: AccountInput): Promise<AccountModel>;
    findAllSurvey(take: number, skip: number): Promise<SurveyModel[]>;
    createUpdateSurvey(surveyInput: SurveyInput): Promise<SurveyModel>;
    findAllQuestion(take: number, skip: number): Promise<QuestionsModel[]>;
    createUpdateQuestion(questionInput: QuestionInput): Promise<QuestionsModel>;
    createUpdateNotif(notif: NotificationInput): Promise<NotificationModel>;
    findAllNotif(take: number, skip: number): Promise<NotificationModel[]>;
}

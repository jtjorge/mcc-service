import { QuestionsModel } from './../entity/questions';
import { SurveyModel } from './../entity/survey';
import { Repository } from 'typeorm';
import { AccountModel } from 'src/entity/account';
declare class RepositoryService {
    readonly accountModel: Repository<AccountModel>;
    readonly surveyModel: Repository<SurveyModel>;
    readonly questionsModel: Repository<QuestionsModel>;
    constructor(accountModel: Repository<AccountModel>, surveyModel: Repository<SurveyModel>, questionsModel: Repository<QuestionsModel>);
}
export default RepositoryService;

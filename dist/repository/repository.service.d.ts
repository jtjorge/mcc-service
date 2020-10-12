import { QuestionsModel } from './../entity/questions';
import { SurveyModel } from './../entity/survey';
import { Repository } from 'typeorm';
import { AccountModel } from 'src/entity/account';
import { NotificationModel } from 'src/entity/notification';
declare class RepositoryService {
    readonly accountModel: Repository<AccountModel>;
    readonly surveyModel: Repository<SurveyModel>;
    readonly questionsModel: Repository<QuestionsModel>;
    readonly notificationModel: Repository<NotificationModel>;
    constructor(accountModel: Repository<AccountModel>, surveyModel: Repository<SurveyModel>, questionsModel: Repository<QuestionsModel>, notificationModel: Repository<NotificationModel>);
}
export default RepositoryService;

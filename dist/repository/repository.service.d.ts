import { SurveyModel } from './../entity/survey';
import { Repository } from 'typeorm';
import { AccountModel } from 'src/entity/account';
declare class RepositoryService {
    readonly accountModel: Repository<AccountModel>;
    readonly surveyModel: Repository<SurveyModel>;
    constructor(accountModel: Repository<AccountModel>, surveyModel: Repository<SurveyModel>);
}
export default RepositoryService;

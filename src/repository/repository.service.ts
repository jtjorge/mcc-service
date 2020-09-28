import { SurveyModel } from './../entity/survey';
import { Injectable, Session } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { AccountModel } from 'src/entity/account';

@Injectable()
class RepositoryService {
    public constructor(
        @InjectRepository(AccountModel) public readonly accountModel: Repository<AccountModel>,
        @InjectRepository(SurveyModel) public readonly surveyModel: Repository<SurveyModel>
    ) {}
}

export default RepositoryService;
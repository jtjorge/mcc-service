import { QuestionsModel } from './../entity/questions';
import { SurveyModel } from './../entity/survey';
import { Injectable, Session } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { AccountModel } from 'src/entity/account';
import { NotificationModel } from 'src/entity/notification';

@Injectable()
class RepositoryService {
    public constructor(
        @InjectRepository(AccountModel) public readonly accountModel: Repository<AccountModel>,
        @InjectRepository(SurveyModel) public readonly surveyModel: Repository<SurveyModel>,
        @InjectRepository(QuestionsModel) public readonly questionsModel: Repository<QuestionsModel>,
        @InjectRepository(NotificationModel) public readonly notificationModel: Repository<NotificationModel>
    ) {}
}

export default RepositoryService;
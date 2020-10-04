import { AccountModel } from 'src/entity/account';
import { BaseEntity } from "typeorm";
import { QuestionsModel } from './questions';
export declare class SurveyModel extends BaseEntity {
    id: string;
    level: string;
    answer: string;
    question_id: string;
    account_id: string;
    other_sickness: string;
    temperature: string;
    agreement: string;
    account_type: string;
    identifier: string;
    date_created: Date;
    accountModel?: Promise<AccountModel>;
    questionModel?: Promise<QuestionsModel[]>;
}

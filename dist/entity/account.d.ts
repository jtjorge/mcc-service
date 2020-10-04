import { SurveyModel } from 'src/entity/survey';
import { BaseEntity } from "typeorm";
export declare class AccountModel extends BaseEntity {
    id: string;
    username: string;
    password: string;
    name: string;
    telephone: string;
    address: string;
    gender: string;
    age: string;
    user_level: string;
    date_created: Date;
    updated_date: Date;
    accountSurvey?: Promise<SurveyModel[]>;
}

import { SurveyModel } from 'src/entity/survey';
import { BaseEntity } from "typeorm";
export declare class QuestionsModel extends BaseEntity {
    id: number;
    level: number;
    question: string;
    created_date: Date;
    questionSurvey?: Promise<SurveyModel[]>;
}

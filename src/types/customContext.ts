import { SurveyModel } from 'src/entity/survey';
import DataLoader from 'dataloader';

export interface CustomContext{
    req: Request;
    res: Response;
    surveyLoader: DataLoader<string,SurveyModel[]>;
}
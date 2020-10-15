import { getRepository } from 'typeorm';
import { SurveyModel } from './../entity/survey';
import * as  Dataloader from 'dataloader';
import { async } from 'rxjs';
import { getConnection } from 'typeorm';

export const surveyLoader = () => new Dataloader(async(keys:string[]) => {
    const survey = getRepository(SurveyModel)
    .createQueryBuilder("survey")
    .leftJoinAndSelect("survey.accountModel","accountModel")
    .where("survey.account_id IN(:...keys)",{keys})
    .getMany()

    return (await survey).map(survey => survey.accountModel)
})
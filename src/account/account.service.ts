import { SurveyInput } from './../inputs/survey-input';
import { SurveyModel } from 'src/entity/survey';
import { AccountModel } from 'src/entity/account';
import { Injectable } from "@nestjs/common";
import RepositoryService from "src/repository/repository.service";
import { AccountInput } from 'src/inputs/account-input';

@Injectable()
export class AccountService {
    constructor(private repositoryService: RepositoryService){}

    async findAll(take: number, skip: number): Promise<AccountModel[]> {
        return await this.repositoryService.accountModel.find({ take: take, skip: skip });
      }

    async createUpdate(accountInput: AccountInput): Promise<AccountModel> {
      const input = new AccountModel();
        input.id = accountInput.id,
        input.name = accountInput.name
        input.telephone = accountInput.telephone
        input.address = accountInput.address
        input.gender = accountInput.gender
        input.age = accountInput.age
        input.user_level = accountInput.user_level
      return await this.repositoryService.accountModel.save(input);
    }

    async findAllSurvey(take: number, skip: number): Promise<SurveyModel[]> {
      return await this.repositoryService.surveyModel.find({ take: take, skip: skip });
    }

  async createUpdateSurvey(surveyInput: SurveyInput): Promise<SurveyModel> {
    const input = new SurveyModel();
      input.id = surveyInput.id,
      input.level = surveyInput.level
      input.answer = surveyInput.answer
      input.description = surveyInput.description
      input.account_id = surveyInput.account_id
      input.temperature = surveyInput.temperature
      input.agreement = surveyInput.agreement
      input.account_type = surveyInput.account_type
    return await this.repositoryService.surveyModel.save(input);
  }
    
}
/**
 * 












 */
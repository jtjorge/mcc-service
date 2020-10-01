import { QuestionInput } from './../inputs/question-inputs';
import { QuestionsModel } from './../entity/questions';
import { SurveyInput } from './../inputs/survey-input';
import { SurveyModel } from 'src/entity/survey';
import { AccountModel } from 'src/entity/account';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import RepositoryService from "src/repository/repository.service";
import { AccountInput } from 'src/inputs/account-input';

@Injectable()
export class AccountService {
    constructor(private repositoryService: RepositoryService){}

    async findAll(take: number, skip: number): Promise<AccountModel[]> {
        return await this.repositoryService.accountModel.find({ take: take, skip: skip });
      }

      async login(user_id: string, password: string): Promise<AccountModel> {
        
        const login = await this.repositoryService.accountModel.findOne({user_id:user_id,password:password});
        return login;
          /*throw new HttpException({
            status: HttpStatus.BAD_REQUEST,
            error: 'Invalid Credentials',
          }, HttpStatus.BAD_REQUEST);*/
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
        input.date_created = accountInput.date_created
        input.user_id = input.user_id
        input.password = input.password
        try{
          return await this.repositoryService.accountModel.save(input);
        }catch(exception){
          throw new HttpException({
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: exception,
          }, HttpStatus.FORBIDDEN);
        }
     }
     

    async findAllSurvey(take: number, skip: number): Promise<SurveyModel[]> {
      return await this.repositoryService.surveyModel.find({ take: take, skip: skip });
    }

    async createUpdateSurvey(surveyInput: SurveyInput): Promise<SurveyModel> {
      const input = new SurveyModel();
        input.id = surveyInput.id;
        input.level = surveyInput.level
        input.answer = surveyInput.answer
        input.other_sickness = surveyInput.other_sickness
        input.question_id = surveyInput.question_id
        input.account_name = surveyInput.account_name
        input.temperature = surveyInput.temperature
        input.agreement = surveyInput.agreement
        input.account_type = surveyInput.account_type
        input.date_created = surveyInput.date_created
      return await this.repositoryService.surveyModel.save(input);
    }

    async findAllQuestion(take: number, skip: number): Promise<QuestionsModel[]> {
      return await this.repositoryService.questionsModel.find({ take: take, skip: skip });
    }

    async createUpdateQuestion(questionInput: QuestionInput): Promise<QuestionsModel> {
      const input = new QuestionsModel();
        input.id = questionInput.id,
        input.level = questionInput.level,
        input.question = questionInput.question
      return await this.repositoryService.questionsModel.save(input);
    }
    
}

import { QuestionInput } from './../inputs/question-inputs';
import { QuestionsModel } from './../entity/questions';
import { SurveyInput } from './../inputs/survey-input';
import { SurveyModel } from 'src/entity/survey';
import { AccountModel } from 'src/entity/account';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import RepositoryService from "src/repository/repository.service";
import { AccountInput } from 'src/inputs/account-input';
import getRepository from "typeorm";

@Injectable()
export class AccountService {
    constructor(private repositoryService: RepositoryService){}

    async findAll(take: number, skip: number): Promise<AccountModel[]> {
        return await this.repositoryService.accountModel.find({ take: take, skip: skip });
      }

      async findAllManagedAccounts(take: number, skip: number,user_level:string,keyword:string): Promise<AccountModel[]> {
        
        //https://github.com/typeorm/typeorm/blob/master/docs/select-query-builder.md

        return await this.repositoryService.accountModel.find({ 
          where: {
            user_level,
          },
          take:take,
          skip:skip
        });
      }

      async findDistictAccount(): Promise<AccountModel[]> {
        return await this.repositoryService.accountModel.find();
      }

      async login(username: string, password: string): Promise<AccountModel> {
        
        const login = await this.repositoryService.accountModel.findOne({username:username,password:password});
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
        input.username = accountInput.username
        input.password = accountInput.password
        try{
           const verify = await this.repositoryService.accountModel.findOne({username:accountInput.username})
           if(!verify){
            return await this.repositoryService.accountModel.save(input);
           }else{
            throw new HttpException({
              status: HttpStatus.AMBIGUOUS,
              error: 'Account already exist',
            }, HttpStatus.AMBIGUOUS);
           }
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
        input.account_id = surveyInput.account_id
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

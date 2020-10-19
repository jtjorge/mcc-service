import { NotificationInput } from './../inputs/notification';
import { NotificationModel } from './../entity/notification';
import { QuestionInput } from './../inputs/question-inputs';
import { QuestionsModel } from './../entity/questions';
import { SurveyInput } from './../inputs/survey-input';
import { SurveyModel } from 'src/entity/survey';
import { AccountModel } from 'src/entity/account';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import RepositoryService from "src/repository/repository.service";
import { AccountInput } from 'src/inputs/account-input';
import getRepository, { Between, Equal, Like, MoreThan } from "typeorm";
import { AccountManageStore } from 'src/entity/response-storage/AccountManageStore';

@Injectable()
export class AccountService {
    constructor(private repositoryService: RepositoryService){}

    async findAll(take: number, skip: number): Promise<AccountModel[]> {
        return await this.repositoryService.accountModel.find({ take: take, skip: skip });
      }

      async getAllSurvey(level:number,uniqueNumber:string, fromToDate: string): Promise<SurveyModel[]> {
        const splitted = fromToDate.split(",", 2); 
        const bet = new Date(splitted[0]).toISOString();
        const ween = new Date(splitted[1]).toISOString();

        if(level == 1 || level == 2 || level == 3){
          if(level == 3){
            return await this.repositoryService.surveyModel.find({
              order:{
                date_created: 'DESC',
                answer: 'DESC'
              },
              where:{
                level: level,
                answer: 'false',
                date_created: Between(`${bet}`,`${ween}`)
              },
              relations:['accountModel','questionModel']
            });
          }else{
            return await this.repositoryService.surveyModel.find({
              order:{
                date_created: 'DESC',
                answer: 'DESC'
              },
              where:{
                level: level,
                answer: 'true',
                date_created: Between(`${bet}`,`${ween}`)
              },
              relations:['accountModel','questionModel']
            });
          }
        }else if(uniqueNumber !== 'undefined' && 'null'){
          const yesterday = ( d => new Date(d.setDate(d.getDate()-1)) )(new Date);
          return await this.repositoryService.surveyModel.find({
            order:{
              date_created: 'DESC'
            },
            where:{
              identifier:uniqueNumber,
              date_created: MoreThan(yesterday) 
            },
            relations:['accountModel','questionModel']
          });
        }
        else{

          return await this.repositoryService.surveyModel.find({
            order:{
              date_created: 'DESC'
            },
            where:{
              date_created: Between(`${bet}`,`${ween}`)
            },
            relations:['accountModel','questionModel']
          });
        }
      }

      async findAllManagedAccounts(take: number, skip: number,user_level:string,keyword:string): Promise<AccountManageStore>{
        if(keyword != 'undefined' && keyword != 'null'){
          const [result, total] = await this.repositoryService.accountModel.findAndCount({
            where: {
              name: Like(`%${keyword}%`),
              user_level: user_level,
            },
            order:{
              date_created: 'DESC'
            },
            take:take,
            skip:skip
          });
          const getDataAndCount = {
            data:result,
            count: total
          }
          return getDataAndCount;
        }else{
          const [result, total]  =  await this.repositoryService.accountModel.findAndCount({
            where: {
              user_level: user_level
            },
            order:{
              date_created: 'DESC'
            },
            take:take,
            skip:skip
          });
          const getDataAndCount = {
            data:result,
            count: total
          }
          return getDataAndCount;
        }
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
        input.updated_date = accountInput.updated_date
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
        input.account_id = surveyInput.account_id
        input.temperature = surveyInput.temperature
        input.agreement = surveyInput.agreement
        input.account_type = surveyInput.account_type
        input.identifier = surveyInput.identifier
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

    async createUpdateNotif(notif: NotificationInput): Promise<NotificationModel> {
      const input = new NotificationModel();
        input.id = notif.id;
        input.flag = notif.flag;
        input.account_name = notif.account_name;
        input.question = notif.question;
        input.unique_number = notif.unique_number;
        input.view_date = notif.view_date;
        input.viewed_by = notif.viewed_by;
        input.date = notif.date;
      return await this.repositoryService.notificationModel.save(input);
    }

    async findAllNotif(take: number, skip: number): Promise<NotificationModel[]> {
      return await this.repositoryService.notificationModel.find({ take: take, skip: skip,
        where:{
          view_date: ""
        },
        order:{
          date: "DESC"
      }
     });
    }
    
}

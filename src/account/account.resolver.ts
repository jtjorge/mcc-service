import { NotificationModel } from './../entity/notification';
import { QuestionInput } from './../inputs/question-inputs';
import { QuestionsModel } from './../entity/questions';
import { AccountModel } from './../entity/account';
import { Args, Int, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { AccountService } from "./account.service";
import { AccountInput } from 'src/inputs/account-input';
import { SurveyModel } from 'src/entity/survey';
import { SurveyInput } from 'src/inputs/survey-input';
import { AccountManageStore } from 'src/entity/response-storage/AccountManageStore';
import { NotificationInput } from 'src/inputs/notification';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();
@Resolver()
export class AccountResolver{
    constructor( private accountService: AccountService){}
    @Query(() => [AccountModel], {nullable:true})
    async getAllAccounts(
        @Args('take', { type: () => Int }) take: number,
        @Args('skip', { type: () => Int }) skip: number,) {
       return await this.accountService.findAll(take,skip);
    }

    @Query(() =>  AccountManageStore, {nullable:true})
    async getAllManagedAccounts(
        @Args('take', { type: () => Int }) take: number,
        @Args('skip', { type: () => Int }) skip: number,
        @Args('user_level', { type: () => String }) user_level: string,
        @Args('keyword', { nullable:true}) keyword: string): Promise<AccountManageStore> {
       return await this.accountService.findAllManagedAccounts(take,skip,user_level,keyword);
    }

    @Query(() => [AccountModel], {nullable:true})
    async getDistinctAccount(){
       return await this.accountService.findDistictAccount();
    }

    @Mutation(() => AccountModel, {nullable: true})
    async createUpdateAccount(@Args('createUpdate') createUpdate: AccountInput): Promise<AccountInput> {
        return this.accountService.createUpdate(createUpdate);
    }

    @Query(() => [SurveyModel], {nullable:true})
    async getAllSurvey(@Args('level', { type: () => Int }) level: number,
                      @Args('uniqueNumber', { type: () => String }) uniqueNumber: string,
                      @Args('fromToDate', { type: () => String }) fromToDate: string): Promise<SurveyModel[]>{
       return await this.accountService.getAllSurvey(level,uniqueNumber,fromToDate);
    }
    @Query(()=> AccountModel, {nullable: true})
    async getCredentials(
        @Args('username', { type: () => String }) user_id: string,
        @Args('password', { type: () => String }) password: string,
    ): Promise<AccountModel> {
        return await this.accountService.login(user_id,password);
    }

    @Mutation(() => SurveyModel, {nullable: true})
    async createUpdateSurvey(@Args('createUpdateSurvey') createUpdate: SurveyInput): Promise<SurveyModel> {
        return this.accountService.createUpdateSurvey(createUpdate);
    }

    @Query(() => [QuestionsModel], {nullable:true})
    async getAllQuestions(
        @Args('take', { type: () => Int }) take: number,
        @Args('skip', { type: () => Int }) skip: number,) {
       return await this.accountService.findAllQuestion(take,skip);
    }

    @Mutation(() => QuestionsModel, {nullable: true})
    async createUpdateQuestion(@Args('createUpdateQuestion') createUpdateQuestion: QuestionInput): Promise<QuestionsModel> {
        return this.accountService.createUpdateQuestion(createUpdateQuestion);
    }

    @Query(() => [QuestionsModel], {nullable:true})
    async getAllNotif(
        @Args('take', { type: () => Int }) take: number,
        @Args('skip', { type: () => Int }) skip: number,) {
       return this.accountService.findAllNotif(take,skip);
    }

    public notificationTrigger = 'probable';
    @Mutation(() => NotificationModel, {nullable: true})
    async createUpdateNotif(@Args('createUpdateNotif',{nullable:true}) createUpdateNotif: NotificationInput): Promise<NotificationModel> {
        const notifAdded : NotificationModel = await this.accountService.createUpdateNotif(createUpdateNotif);
        pubSub.publish(this.notificationTrigger,{probable: notifAdded});
        return await notifAdded;
    }

    @Subscription(() => NotificationModel,{
        filter: (payload, variables) =>
          payload.probable.flag === variables.flag
      })
    probable(@Args('flag') flag: string) {
      return pubSub.asyncIterator(this.notificationTrigger);
    }
}
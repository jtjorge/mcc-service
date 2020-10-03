import { QuestionInput } from './../inputs/question-inputs';
import { QuestionsModel } from './../entity/questions';
import { AccountModel } from './../entity/account';
import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AccountService } from "./account.service";
import { AccountInput } from 'src/inputs/account-input';
import { SurveyModel } from 'src/entity/survey';
import { SurveyInput } from 'src/inputs/survey-input';

@Resolver()
export class AccountResolver{
    constructor( private accountService: AccountService){}
    
    @Query(() => [AccountModel], {nullable:true})
    async getAllAccounts(
        @Args('take', { type: () => Int }) take: number,
        @Args('skip', { type: () => Int }) skip: number,) {
       return await this.accountService.findAll(take,skip);
    }

    @Query(() => [AccountModel], {nullable:true})
    async getAllManagedAccounts(
        @Args('take', { type: () => Int }) take: number,
        @Args('skip', { type: () => Int }) skip: number,
        @Args('user_level', { type: () => String }) user_level: string,
        @Args('keyword', { nullable:true}) keyword: string,) {
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
    async getAllSurvey(
        @Args('take', { type: () => Int }) take: number,
        @Args('skip', { type: () => Int }) skip: number,) {
       return await this.accountService.findAll(take,skip);
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

}
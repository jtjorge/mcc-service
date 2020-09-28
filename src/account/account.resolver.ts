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

    @Mutation(() => SurveyModel, {nullable: true})
    async createUpdateSurvey(@Args('createUpdateSurvey') createUpdate: SurveyInput): Promise<SurveyInput> {
        return this.accountService.createUpdateSurvey(createUpdate);
    }

}
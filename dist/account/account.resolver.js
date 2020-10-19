"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountResolver = void 0;
const notification_1 = require("./../entity/notification");
const question_inputs_1 = require("./../inputs/question-inputs");
const questions_1 = require("./../entity/questions");
const account_1 = require("./../entity/account");
const graphql_1 = require("@nestjs/graphql");
const account_service_1 = require("./account.service");
const account_input_1 = require("../inputs/account-input");
const survey_1 = require("../entity/survey");
const survey_input_1 = require("../inputs/survey-input");
const AccountManageStore_1 = require("../entity/response-storage/AccountManageStore");
const notification_2 = require("../inputs/notification");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const common_1 = require("@nestjs/common");
const pubSub = new graphql_subscriptions_1.PubSub();
let AccountResolver = class AccountResolver {
    constructor(accountService) {
        this.accountService = accountService;
        this.notificationTrigger = 'probable';
    }
    async getAllAccounts(take, skip) {
        return await this.accountService.findAll(take, skip);
    }
    async getAllManagedAccounts(take, skip, user_level, keyword) {
        return await this.accountService.findAllManagedAccounts(take, skip, user_level, keyword);
    }
    async getDistinctAccount() {
        return await this.accountService.findDistictAccount();
    }
    async createUpdateAccount(createUpdate) {
        return this.accountService.createUpdate(createUpdate);
    }
    async getAllSurvey(level, uniqueNumber, fromToDate) {
        return await this.accountService.getAllSurvey(level, uniqueNumber, fromToDate);
    }
    async getCredentials(user_id, password) {
        return await this.accountService.login(user_id, password);
    }
    async createUpdateSurvey(createUpdate) {
        return this.accountService.createUpdateSurvey(createUpdate);
    }
    async getAllQuestions(take, skip) {
        return await this.accountService.findAllQuestion(take, skip);
    }
    async createUpdateQuestion(createUpdateQuestion) {
        return this.accountService.createUpdateQuestion(createUpdateQuestion);
    }
    async getAllNotif(take, skip) {
        return this.accountService.findAllNotif(take, skip);
    }
    async createUpdateNotif(createUpdateNotif) {
        const notifAdded = await this.accountService.createUpdateNotif(createUpdateNotif);
        pubSub.publish(this.notificationTrigger, { probable: notifAdded });
        return await notifAdded;
    }
    probable(flag) {
        return pubSub.asyncIterator(this.notificationTrigger);
    }
};
__decorate([
    graphql_1.Query(() => [account_1.AccountModel], { nullable: true }),
    __param(0, graphql_1.Args('take', { type: () => graphql_1.Int })),
    __param(1, graphql_1.Args('skip', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "getAllAccounts", null);
__decorate([
    graphql_1.Query(() => AccountManageStore_1.AccountManageStore, { nullable: true }),
    __param(0, graphql_1.Args('take', { type: () => graphql_1.Int })),
    __param(1, graphql_1.Args('skip', { type: () => graphql_1.Int })),
    __param(2, graphql_1.Args('user_level', { type: () => String })),
    __param(3, graphql_1.Args('keyword', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "getAllManagedAccounts", null);
__decorate([
    graphql_1.Query(() => [account_1.AccountModel], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "getDistinctAccount", null);
__decorate([
    graphql_1.Mutation(() => account_1.AccountModel, { nullable: true }),
    common_1.UseGuards(),
    __param(0, graphql_1.Args('createUpdate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_input_1.AccountInput]),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "createUpdateAccount", null);
__decorate([
    graphql_1.Query(() => [survey_1.SurveyModel], { nullable: true }),
    __param(0, graphql_1.Args('level', { type: () => graphql_1.Int })),
    __param(1, graphql_1.Args('uniqueNumber', { type: () => String })),
    __param(2, graphql_1.Args('fromToDate', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "getAllSurvey", null);
__decorate([
    graphql_1.Query(() => account_1.AccountModel, { nullable: true }),
    __param(0, graphql_1.Args('username', { type: () => String })),
    __param(1, graphql_1.Args('password', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "getCredentials", null);
__decorate([
    graphql_1.Mutation(() => survey_1.SurveyModel, { nullable: true }),
    __param(0, graphql_1.Args('createUpdateSurvey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [survey_input_1.SurveyInput]),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "createUpdateSurvey", null);
__decorate([
    graphql_1.Query(() => [questions_1.QuestionsModel], { nullable: true }),
    __param(0, graphql_1.Args('take', { type: () => graphql_1.Int })),
    __param(1, graphql_1.Args('skip', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "getAllQuestions", null);
__decorate([
    graphql_1.Mutation(() => questions_1.QuestionsModel, { nullable: true }),
    __param(0, graphql_1.Args('createUpdateQuestion')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [question_inputs_1.QuestionInput]),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "createUpdateQuestion", null);
__decorate([
    graphql_1.Query(() => [notification_1.NotificationModel], { nullable: true }),
    __param(0, graphql_1.Args('take', { type: () => graphql_1.Int })),
    __param(1, graphql_1.Args('skip', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "getAllNotif", null);
__decorate([
    graphql_1.Mutation(() => notification_1.NotificationModel, { nullable: true }),
    __param(0, graphql_1.Args('createUpdateNotif', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notification_2.NotificationInput]),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "createUpdateNotif", null);
__decorate([
    graphql_1.Subscription(() => notification_1.NotificationModel, {
        filter: (payload, variables) => payload.probable.flag === variables.flag
    }),
    __param(0, graphql_1.Args('flag')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccountResolver.prototype, "probable", null);
AccountResolver = __decorate([
    graphql_1.Resolver(() => survey_1.SurveyModel),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AccountResolver);
exports.AccountResolver = AccountResolver;
//# sourceMappingURL=account.resolver.js.map
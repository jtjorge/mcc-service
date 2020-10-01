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
const question_inputs_1 = require("./../inputs/question-inputs");
const questions_1 = require("./../entity/questions");
const account_1 = require("./../entity/account");
const graphql_1 = require("@nestjs/graphql");
const account_service_1 = require("./account.service");
const account_input_1 = require("../inputs/account-input");
const survey_1 = require("../entity/survey");
const survey_input_1 = require("../inputs/survey-input");
let AccountResolver = class AccountResolver {
    constructor(accountService) {
        this.accountService = accountService;
    }
    async getAllAccounts(take, skip) {
        return await this.accountService.findAll(take, skip);
    }
    async createUpdateAccount(createUpdate) {
        return this.accountService.createUpdate(createUpdate);
    }
    async getAllSurvey(take, skip) {
        return await this.accountService.findAll(take, skip);
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
    graphql_1.Mutation(() => account_1.AccountModel, { nullable: true }),
    __param(0, graphql_1.Args('createUpdate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_input_1.AccountInput]),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "createUpdateAccount", null);
__decorate([
    graphql_1.Query(() => [survey_1.SurveyModel], { nullable: true }),
    __param(0, graphql_1.Args('take', { type: () => graphql_1.Int })),
    __param(1, graphql_1.Args('skip', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "getAllSurvey", null);
__decorate([
    graphql_1.Query(() => account_1.AccountModel, { nullable: true }),
    __param(0, graphql_1.Args('user_id', { type: () => String })),
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
AccountResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AccountResolver);
exports.AccountResolver = AccountResolver;
//# sourceMappingURL=account.resolver.js.map
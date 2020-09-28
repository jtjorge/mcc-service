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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountService = void 0;
const survey_1 = require("../entity/survey");
const account_1 = require("../entity/account");
const common_1 = require("@nestjs/common");
const repository_service_1 = require("../repository/repository.service");
const account_input_1 = require("../inputs/account-input");
let AccountService = class AccountService {
    constructor(repositoryService) {
        this.repositoryService = repositoryService;
    }
    async findAll(take, skip) {
        return await this.repositoryService.accountModel.find({ take: take, skip: skip });
    }
    async createUpdate(accountInput) {
        const input = new account_1.AccountModel();
        input.id = accountInput.id,
            input.name = accountInput.name;
        input.telephone = accountInput.telephone;
        input.address = accountInput.address;
        input.gender = accountInput.gender;
        input.age = accountInput.age;
        input.user_level = accountInput.user_level;
        return await this.repositoryService.accountModel.save(input);
    }
    async findAllSurvey(take, skip) {
        return await this.repositoryService.surveyModel.find({ take: take, skip: skip });
    }
    async createUpdateSurvey(surveyInput) {
        const input = new survey_1.SurveyModel();
        input.id = surveyInput.id,
            input.level = surveyInput.level;
        input.answer = surveyInput.answer;
        input.description = surveyInput.description;
        input.account_id = surveyInput.account_id;
        input.temperature = surveyInput.temperature;
        input.agreement = surveyInput.agreement;
        input.account_type = surveyInput.account_type;
        return await this.repositoryService.surveyModel.save(input);
    }
};
AccountService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [repository_service_1.default])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map
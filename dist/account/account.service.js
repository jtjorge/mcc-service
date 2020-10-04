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
const questions_1 = require("./../entity/questions");
const survey_1 = require("../entity/survey");
const account_1 = require("../entity/account");
const common_1 = require("@nestjs/common");
const repository_service_1 = require("../repository/repository.service");
const account_input_1 = require("../inputs/account-input");
const typeorm_1 = require("typeorm");
const AccountManageStore_1 = require("../entity/response-storage/AccountManageStore");
let AccountService = class AccountService {
    constructor(repositoryService) {
        this.repositoryService = repositoryService;
    }
    async findAll(take, skip) {
        return await this.repositoryService.accountModel.find({ take: take, skip: skip });
    }
    async getAllSurvey(level, uniqueNumber) {
        if (level != 0) {
            return await this.repositoryService.surveyModel.find({
                order: {
                    date_created: 'DESC'
                },
                where: {
                    level: level
                }
            });
        }
        else if (uniqueNumber !== 'undefined' && 'null') {
            const yesterday = (d => new Date(d.setDate(d.getDate() - 1)))(new Date);
            return await this.repositoryService.surveyModel.find({
                order: {
                    date_created: 'DESC'
                },
                where: {
                    identifier: uniqueNumber,
                    date_created: typeorm_1.MoreThan(yesterday)
                }
            });
        }
        else {
            return await this.repositoryService.surveyModel.find({
                order: {
                    date_created: 'DESC'
                }
            });
        }
    }
    async findAllManagedAccounts(take, skip, user_level, keyword) {
        if (keyword != 'undefined' && keyword != 'null') {
            const [result, total] = await this.repositoryService.accountModel.findAndCount({
                where: {
                    name: typeorm_1.Like(`%${keyword}%`),
                    user_level: user_level,
                },
                order: {
                    date_created: 'DESC'
                },
                take: take,
                skip: skip
            });
            const getDataAndCount = {
                data: result,
                count: total
            };
            return getDataAndCount;
        }
        else {
            const [result, total] = await this.repositoryService.accountModel.findAndCount({
                where: {
                    user_level: user_level
                },
                order: {
                    date_created: 'DESC'
                },
                take: take,
                skip: skip
            });
            const getDataAndCount = {
                data: result,
                count: total
            };
            console.log(getDataAndCount);
            return getDataAndCount;
        }
    }
    async findDistictAccount() {
        return await this.repositoryService.accountModel.find();
    }
    async login(username, password) {
        const login = await this.repositoryService.accountModel.findOne({ username: username, password: password });
        return login;
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
        input.date_created = accountInput.date_created;
        input.username = accountInput.username;
        input.password = accountInput.password;
        input.updated_date = accountInput.updated_date;
        try {
            return await this.repositoryService.accountModel.save(input);
        }
        catch (exception) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: exception,
            }, common_1.HttpStatus.FORBIDDEN);
        }
    }
    async findAllSurvey(take, skip) {
        return await this.repositoryService.surveyModel.find({ take: take, skip: skip });
    }
    async createUpdateSurvey(surveyInput) {
        const input = new survey_1.SurveyModel();
        input.id = surveyInput.id;
        input.level = surveyInput.level;
        input.answer = surveyInput.answer;
        input.other_sickness = surveyInput.other_sickness;
        input.question_id = surveyInput.question_id;
        input.account_id = surveyInput.account_id;
        input.temperature = surveyInput.temperature;
        input.agreement = surveyInput.agreement;
        input.account_type = surveyInput.account_type;
        input.identifier = surveyInput.identifier;
        input.date_created = surveyInput.date_created;
        return await this.repositoryService.surveyModel.save(input);
    }
    async findAllQuestion(take, skip) {
        return await this.repositoryService.questionsModel.find({ take: take, skip: skip });
    }
    async createUpdateQuestion(questionInput) {
        const input = new questions_1.QuestionsModel();
        input.id = questionInput.id,
            input.level = questionInput.level,
            input.question = questionInput.question;
        return await this.repositoryService.questionsModel.save(input);
    }
};
AccountService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [repository_service_1.default])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map
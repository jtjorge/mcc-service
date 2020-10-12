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
const questions_1 = require("./../entity/questions");
const survey_1 = require("./../entity/survey");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const account_1 = require("../entity/account");
const notification_1 = require("../entity/notification");
let RepositoryService = class RepositoryService {
    constructor(accountModel, surveyModel, questionsModel, notificationModel) {
        this.accountModel = accountModel;
        this.surveyModel = surveyModel;
        this.questionsModel = questionsModel;
        this.notificationModel = notificationModel;
    }
};
RepositoryService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(account_1.AccountModel)),
    __param(1, typeorm_1.InjectRepository(survey_1.SurveyModel)),
    __param(2, typeorm_1.InjectRepository(questions_1.QuestionsModel)),
    __param(3, typeorm_1.InjectRepository(notification_1.NotificationModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], RepositoryService);
exports.default = RepositoryService;
//# sourceMappingURL=repository.service.js.map
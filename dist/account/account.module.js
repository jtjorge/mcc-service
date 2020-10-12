"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountModule = void 0;
const notification_1 = require("./../entity/notification");
const questions_1 = require("./../entity/questions");
const survey_1 = require("./../entity/survey");
const repository_service_1 = require("../repository/repository.service");
const account_service_1 = require("./account.service");
const account_resolver_1 = require("./account.resolver");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const account_1 = require("../entity/account");
let AccountModule = class AccountModule {
};
AccountModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([account_1.AccountModel, survey_1.SurveyModel, questions_1.QuestionsModel, notification_1.NotificationModel])],
        providers: [account_resolver_1.AccountResolver,
            account_service_1.AccountService,
            repository_service_1.default],
        exports: [account_resolver_1.AccountResolver,
            repository_service_1.default,
            account_service_1.AccountService]
    })
], AccountModule);
exports.AccountModule = AccountModule;
//# sourceMappingURL=account.module.js.map
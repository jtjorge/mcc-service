"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountModule = void 0;
var questions_1 = require("./../entity/questions");
var survey_1 = require("./../entity/survey");
var repository_service_1 = require("src/repository/repository.service");
var account_service_1 = require("./account.service");
var account_resolver_1 = require("./account.resolver");
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var account_1 = require("src/entity/account");
var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([account_1.AccountModel, survey_1.SurveyModel, questions_1.QuestionsModel])],
            providers: [account_resolver_1.AccountResolver,
                account_service_1.AccountService,
                repository_service_1["default"]],
            exports: [account_resolver_1.AccountResolver,
                repository_service_1["default"],
                account_service_1.AccountService]
        })
    ], AccountModule);
    return AccountModule;
}());
exports.AccountModule = AccountModule;

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SurveyModel = void 0;
var account_1 = require("src/entity/account");
var graphql_1 = require("@nestjs/graphql");
var typeorm_1 = require("typeorm");
var questions_1 = require("./questions");
var SurveyModel = /** @class */ (function (_super) {
    __extends(SurveyModel, _super);
    function SurveyModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        graphql_1.Field({ nullable: false }),
        typeorm_1.PrimaryGeneratedColumn('uuid')
    ], SurveyModel.prototype, "id");
    __decorate([
        graphql_1.Field({ nullable: true }),
        typeorm_1.Column()
    ], SurveyModel.prototype, "level");
    __decorate([
        graphql_1.Field({ nullable: true }),
        typeorm_1.Column()
    ], SurveyModel.prototype, "answer");
    __decorate([
        graphql_1.Field({ nullable: true }),
        typeorm_1.Column()
    ], SurveyModel.prototype, "question_id");
    __decorate([
        graphql_1.Field({ nullable: true }),
        typeorm_1.Column()
    ], SurveyModel.prototype, "account_id");
    __decorate([
        graphql_1.Field({ nullable: true }),
        typeorm_1.Column()
    ], SurveyModel.prototype, "other_sickness");
    __decorate([
        graphql_1.Field({ nullable: true }),
        typeorm_1.Column()
    ], SurveyModel.prototype, "temperature");
    __decorate([
        graphql_1.Field({ nullable: true }),
        typeorm_1.Column()
    ], SurveyModel.prototype, "agreement");
    __decorate([
        graphql_1.Field({ nullable: true }),
        typeorm_1.Column()
    ], SurveyModel.prototype, "account_type");
    __decorate([
        graphql_1.Field({ nullable: true }),
        typeorm_1.Column()
    ], SurveyModel.prototype, "identifier");
    __decorate([
        graphql_1.Field({ nullable: true }),
        typeorm_1.Column()
    ], SurveyModel.prototype, "date_created");
    __decorate([
        graphql_1.Field(function () { return [account_1.AccountModel]; }, { nullable: true }),
        typeorm_1.OneToMany(function () { return account_1.AccountModel; }, function (accountModel) { return accountModel.accountSurvey; })
    ], SurveyModel.prototype, "accountModel");
    __decorate([
        graphql_1.Field(function () { return [questions_1.QuestionsModel]; }, { nullable: true }),
        typeorm_1.OneToMany(function () { return questions_1.QuestionsModel; }, function (questionModel) { return questionModel.questionSurvey; })
    ], SurveyModel.prototype, "questionModel");
    SurveyModel = __decorate([
        graphql_1.ObjectType(),
        typeorm_1.Entity({ name: "tbl_survey" })
    ], SurveyModel);
    return SurveyModel;
}(typeorm_1.BaseEntity));
exports.SurveyModel = SurveyModel;

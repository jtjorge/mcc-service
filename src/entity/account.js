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
exports.AccountModel = void 0;
var survey_1 = require("src/entity/survey");
var graphql_1 = require("@nestjs/graphql");
var typeorm_1 = require("typeorm");
var AccountModel = /** @class */ (function (_super) {
    __extends(AccountModel, _super);
    function AccountModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        graphql_1.Field({ nullable: false }),
        typeorm_1.PrimaryGeneratedColumn('uuid')
    ], AccountModel.prototype, "id");
    __decorate([
        graphql_1.Field({ nullable: true }),
        typeorm_1.Column()
    ], AccountModel.prototype, "username");
    __decorate([
        graphql_1.Field({ nullable: true }),
        typeorm_1.Column()
    ], AccountModel.prototype, "password");
    __decorate([
        graphql_1.Field({ nullable: true }),
        typeorm_1.Column()
    ], AccountModel.prototype, "name");
    __decorate([
        graphql_1.Field({ nullable: true }),
        typeorm_1.Column()
    ], AccountModel.prototype, "telephone");
    __decorate([
        graphql_1.Field({ nullable: true }),
        typeorm_1.Column()
    ], AccountModel.prototype, "address");
    __decorate([
        graphql_1.Field({ nullable: true }),
        typeorm_1.Column()
    ], AccountModel.prototype, "gender");
    __decorate([
        graphql_1.Field({ nullable: true }),
        typeorm_1.Column()
    ], AccountModel.prototype, "age");
    __decorate([
        graphql_1.Field({ nullable: true }),
        typeorm_1.Column()
    ], AccountModel.prototype, "user_level");
    __decorate([
        graphql_1.Field({ nullable: true }),
        typeorm_1.Column()
    ], AccountModel.prototype, "date_created");
    __decorate([
        graphql_1.Field({ nullable: true }),
        typeorm_1.Column()
    ], AccountModel.prototype, "updated_date");
    __decorate([
        graphql_1.Field(function () { return [survey_1.SurveyModel]; }, { nullable: true }),
        typeorm_1.ManyToOne(function () { return survey_1.SurveyModel; }, function (surveyModel) { return surveyModel.accountModel; }),
        typeorm_1.JoinColumn({ name: 'id', referencedColumnName: 'account_id' })
    ], AccountModel.prototype, "accountSurvey");
    AccountModel = __decorate([
        graphql_1.ObjectType(),
        typeorm_1.Entity({ name: "tbl_account" })
    ], AccountModel);
    return AccountModel;
}(typeorm_1.BaseEntity));
exports.AccountModel = AccountModel;

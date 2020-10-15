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
exports.AccountModel = void 0;
const survey_1 = require("./survey");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let AccountModel = class AccountModel extends typeorm_1.BaseEntity {
};
__decorate([
    graphql_1.Field({ nullable: false }),
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], AccountModel.prototype, "id", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], AccountModel.prototype, "username", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], AccountModel.prototype, "password", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], AccountModel.prototype, "name", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], AccountModel.prototype, "telephone", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], AccountModel.prototype, "address", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], AccountModel.prototype, "gender", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], AccountModel.prototype, "age", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], AccountModel.prototype, "user_level", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], AccountModel.prototype, "date_created", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], AccountModel.prototype, "updated_date", void 0);
__decorate([
    graphql_1.Field(() => [survey_1.SurveyModel], { nullable: true }),
    typeorm_1.ManyToOne(() => survey_1.SurveyModel, surveyModel => surveyModel.accountModel),
    typeorm_1.JoinColumn({ name: 'id', referencedColumnName: 'account_id' }),
    __metadata("design:type", Promise)
], AccountModel.prototype, "accountSurvey", void 0);
AccountModel = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Entity({ name: "tbl_account" })
], AccountModel);
exports.AccountModel = AccountModel;
//# sourceMappingURL=account.js.map
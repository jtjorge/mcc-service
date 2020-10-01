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
exports.SurveyModel = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let SurveyModel = class SurveyModel {
};
__decorate([
    graphql_1.Field({ nullable: false }),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], SurveyModel.prototype, "id", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], SurveyModel.prototype, "level", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], SurveyModel.prototype, "answer", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], SurveyModel.prototype, "question_id", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], SurveyModel.prototype, "account_name", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], SurveyModel.prototype, "other_sickness", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], SurveyModel.prototype, "temperature", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], SurveyModel.prototype, "agreement", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], SurveyModel.prototype, "account_type", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], SurveyModel.prototype, "date_created", void 0);
SurveyModel = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Entity({ name: 'tbl_survey' })
], SurveyModel);
exports.SurveyModel = SurveyModel;
//# sourceMappingURL=survey.js.map
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
exports.QuestionsModel = void 0;
const survey_1 = require("./survey");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let QuestionsModel = class QuestionsModel extends typeorm_1.BaseEntity {
};
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], QuestionsModel.prototype, "id", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], QuestionsModel.prototype, "level", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], QuestionsModel.prototype, "question", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], QuestionsModel.prototype, "created_date", void 0);
__decorate([
    graphql_1.Field(() => [survey_1.SurveyModel], { nullable: true }),
    typeorm_1.ManyToOne(() => survey_1.SurveyModel, surveyModel => surveyModel.questionModel),
    typeorm_1.JoinColumn({ name: 'id', referencedColumnName: 'question_id' }),
    __metadata("design:type", Promise)
], QuestionsModel.prototype, "questionSurvey", void 0);
QuestionsModel = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Entity({ name: "tbl_question" })
], QuestionsModel);
exports.QuestionsModel = QuestionsModel;
//# sourceMappingURL=questions.js.map
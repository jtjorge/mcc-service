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
exports.QuestionsModel = void 0;
var survey_1 = require("src/entity/survey");
var graphql_1 = require("@nestjs/graphql");
var typeorm_1 = require("typeorm");
var QuestionsModel = /** @class */ (function (_super) {
    __extends(QuestionsModel, _super);
    function QuestionsModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        graphql_1.Field({ nullable: false }),
        typeorm_1.PrimaryGeneratedColumn()
    ], QuestionsModel.prototype, "id");
    __decorate([
        graphql_1.Field({ nullable: false }),
        typeorm_1.Column()
    ], QuestionsModel.prototype, "level");
    __decorate([
        graphql_1.Field({ nullable: false }),
        typeorm_1.Column()
    ], QuestionsModel.prototype, "question");
    __decorate([
        graphql_1.Field({ nullable: false }),
        typeorm_1.Column()
    ], QuestionsModel.prototype, "created_date");
    __decorate([
        graphql_1.Field(function () { return [survey_1.SurveyModel]; }, { nullable: true }),
        typeorm_1.ManyToOne(function () { return survey_1.SurveyModel; }, function (surveyModel) { return surveyModel.questionModel; }),
        typeorm_1.JoinColumn({ name: 'id', referencedColumnName: 'question_id' })
    ], QuestionsModel.prototype, "questionSurvey");
    QuestionsModel = __decorate([
        graphql_1.ObjectType(),
        typeorm_1.Entity({ name: "tbl_question" })
    ], QuestionsModel);
    return QuestionsModel;
}(typeorm_1.BaseEntity));
exports.QuestionsModel = QuestionsModel;

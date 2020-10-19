"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SurveyInput = void 0;
var graphql_1 = require("@nestjs/graphql");
var SurveyInput = /** @class */ (function () {
    function SurveyInput() {
    }
    __decorate([
        graphql_1.Field({ nullable: true })
    ], SurveyInput.prototype, "id");
    __decorate([
        graphql_1.Field({ nullable: true })
    ], SurveyInput.prototype, "level");
    __decorate([
        graphql_1.Field({ nullable: true })
    ], SurveyInput.prototype, "answer");
    __decorate([
        graphql_1.Field({ nullable: true })
    ], SurveyInput.prototype, "question_id");
    __decorate([
        graphql_1.Field({ nullable: true })
    ], SurveyInput.prototype, "other_sickness");
    __decorate([
        graphql_1.Field({ nullable: true })
    ], SurveyInput.prototype, "account_id");
    __decorate([
        graphql_1.Field({ nullable: true })
    ], SurveyInput.prototype, "temperature");
    __decorate([
        graphql_1.Field({ nullable: true })
    ], SurveyInput.prototype, "agreement");
    __decorate([
        graphql_1.Field({ nullable: true })
    ], SurveyInput.prototype, "account_type");
    __decorate([
        graphql_1.Field({ nullable: true })
    ], SurveyInput.prototype, "identifier");
    __decorate([
        graphql_1.Field({ nullable: true })
    ], SurveyInput.prototype, "date_created");
    SurveyInput = __decorate([
        graphql_1.InputType()
    ], SurveyInput);
    return SurveyInput;
}());
exports.SurveyInput = SurveyInput;

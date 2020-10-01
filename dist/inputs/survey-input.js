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
exports.SurveyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let SurveyInput = class SurveyInput {
};
__decorate([
    graphql_1.Field(() => graphql_1.ID, { nullable: true }),
    __metadata("design:type", Number)
], SurveyInput.prototype, "id", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], SurveyInput.prototype, "level", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], SurveyInput.prototype, "answer", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], SurveyInput.prototype, "question_id", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], SurveyInput.prototype, "other_sickness", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], SurveyInput.prototype, "account_name", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], SurveyInput.prototype, "temperature", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], SurveyInput.prototype, "agreement", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], SurveyInput.prototype, "account_type", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], SurveyInput.prototype, "date_created", void 0);
SurveyInput = __decorate([
    graphql_1.InputType()
], SurveyInput);
exports.SurveyInput = SurveyInput;
//# sourceMappingURL=survey-input.js.map
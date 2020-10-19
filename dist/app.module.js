"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const surveyLoader_1 = require("./loaders/surveyLoader");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const path_1 = require("path");
const typeorm_1 = require("@nestjs/typeorm");
const account_module_1 = require("./account/account.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: path_1.join(process.cwd(), 'src/schema.gql'),
                installSubscriptionHandlers: true,
                debug: false,
                playground: false,
                subscriptions: {
                    keepAlive: 5000,
                },
                context: ({ req, res }) => ({ req, res, surveyLoader: surveyLoader_1.surveyLoader() })
            }),
            typeorm_1.TypeOrmModule.forRoot(),
            account_module_1.AccountModule,
            common_1.CacheModule.register()
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
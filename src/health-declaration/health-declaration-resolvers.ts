import { Resolver } from "@nestjs/graphql";
import { HealthDeclarationService } from "./health-declaration-service";

@Resolver()
export class HealthDeclarationResolvers{
    constructor(
        private healthDeclarationService: HealthDeclarationService
    ){}
}
import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class SurveyInput {
    @Field(() => ID,{nullable: true })
    id: number;

    @Field({nullable: true})
    level: string;

    @Field({nullable: true})
    answer: string;

    @Field({nullable: true})
    description: string;

    @Field({nullable: true})
    account_id: string;

    @Field({nullable: true})
    temperature: string;

    @Field({nullable: true})
    agreement: string;

    @Field({nullable: true})
    account_type: string;   
}
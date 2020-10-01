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
    question_id: string;

    @Field({nullable: true})
    other_sickness: string;

    @Field({nullable: true})
    account_name: string;

    @Field({nullable: true})
    temperature: string;

    @Field({nullable: true})
    agreement: string;

    @Field({nullable: true})
    account_type: string;   
    
    @Field({nullable: true})
    date_created: Date;   
}
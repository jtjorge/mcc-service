import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class QuestionInput {
    
    @Field({nullable: true })
    id: number;

    @Field({nullable: false})
    level: number;

    @Field({nullable: false})
    question: string;

}
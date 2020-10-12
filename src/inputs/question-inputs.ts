import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class QuestionInput {
    
    @Field({nullable: true })
    id: number;

    @Field({nullable: true})
    level: number;

    @Field({nullable: true})
    question: string;

}
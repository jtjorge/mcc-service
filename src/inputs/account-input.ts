import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class AccountInput {

    @Field(() => ID,{nullable: true })
    id: number;

    @Field({nullable: true})
    user_id: string;

    @Field({nullable: true})
    password: string;

    @Field({nullable: true})
    name: string;

    @Field({nullable: true})
    telephone: string;

    @Field({nullable: true})
    address: string;

    @Field({nullable: true})
    gender: string;

    @Field({nullable: true})
    age: string;

    @Field({nullable: true})
    user_level: string;

    @Field({nullable: true})
    date_created: Date;
}
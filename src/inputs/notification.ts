import { Field, InputType } from "@nestjs/graphql";
import {Entity} from "typeorm";

@InputType()
export class NotificationInput {

    @Field({nullable: true})
    id: string

    @Field({nullable: true})
    flag: string

    @Field({nullable: true})
    account_name: string

    @Field({nullable: true})
    question: string

    @Field({nullable: true})
    unique_number: string

    @Field({nullable: true})
    view_date: string

    @Field({nullable: true})
    viewed_by: string

    @Field({nullable: true})
    date: string
}

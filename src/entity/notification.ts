import { Field, ObjectType } from "@nestjs/graphql";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@ObjectType()
@Entity({name: 'tbl_notification'})
export class NotificationModel {
    @Field({nullable:true})
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Field({nullable:true})
    @Column()
    flag: string

    @Field({nullable:true})
    @Column()
    account_name: string

    @Field({nullable:true})
    @Column()
    question: string

    @Field({nullable:true})
    @Column()
    unique_number: string

    @Field({nullable:true})
    @Column()
    view_date: string

    @Field({nullable:true})
    @Column()
    viewed_by: string

    @Field({nullable:true})
    @Column()
    date: string
}

import { Field, ObjectType } from "@nestjs/graphql";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@ObjectType()
@Entity({name:"tbl_account"})
export class AccountModel {

    @Field({nullable: false})
    @PrimaryGeneratedColumn()
    id: number;

    @Field({nullable: true})
    @Column()
    name: string;

    @Field({nullable: true})
    telephone: string;

    @Field({nullable: true})
    @Column()
    address: string;

    @Field({nullable: true})
    @Column()
    gender: string;

    @Field({nullable: true})
    age: string;

    @Field({nullable: true})
    @Column()
    user_level: string;

    @Field({nullable: true})
    @Column()
    date_created: string;

}

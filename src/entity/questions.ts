import { Field, ObjectType } from '@nestjs/graphql';
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@ObjectType()
@Entity({name: 'tbl_question'})
export class QuestionsModel {

    @Field({nullable: false})
    @PrimaryGeneratedColumn()
    id: number;

    @Field({nullable: false})
    @Column()
    level: number;

    @Field({nullable: false})
    @Column()
    question: string;

    @Field({nullable: false})
    @Column()
    created_date: number;

}

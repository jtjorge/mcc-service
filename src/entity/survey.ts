import { Field, ObjectType } from '@nestjs/graphql';
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@ObjectType()
@Entity({name: 'tbl_survey'})
export class SurveyModel {

    @Field({nullable: false})
    @PrimaryGeneratedColumn()
    id: number;

    @Field({nullable: true})
    @Column()
    level: string;

    @Field({nullable: true})
    @Column()
    answer: string;

    @Field({nullable: true})
    @Column()
    description: string;

    @Field({nullable: true})
    @Column()
    account_id: string;

    @Field({nullable: true})
    @Column()
    temperature: string;


    @Field({nullable: true})
    @Column()
    agreement: string;

    @Field({nullable: true})
    @Column()
    account_type: string;   
}

import { SurveyModel } from 'src/entity/survey';
import { Field, ID, ObjectType } from "@nestjs/graphql";
import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@ObjectType()
@Entity({name:"tbl_account"})
export class AccountModel extends BaseEntity {

    @Field({nullable: false})
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field({nullable: true})
    @Column()
    username: string;

    @Field({nullable: true})
    @Column()
    password: string;

    @Field({nullable: true})
    @Column()
    name: string;

    @Field({nullable: true})
    @Column()
    telephone: string;

    @Field({nullable: true})
    @Column()
    address: string;

    @Field({nullable: true})
    @Column()
    gender: string;

    @Field({nullable: true})
    @Column()
    age: string;

    @Field({nullable: true})
    @Column()
    user_level: string;

    @Field({nullable: true})
    @Column()
    date_created: Date;

    @Field({nullable: true})
    @Column()
    updated_date: Date

    @Field(() => [SurveyModel], { nullable: true })
    @ManyToOne(() => SurveyModel, surveyModel => surveyModel.accountModel)
    @JoinColumn({ name: 'id', referencedColumnName: 'account_id' })
    accountSurvey?: Promise<SurveyModel[]>
}

import { AccountModel } from 'src/entity/account';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { QuestionsModel } from './questions';

@ObjectType()
@Entity({name: "tbl_survey"})
export class SurveyModel extends BaseEntity{

    @Field({nullable: true})
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field({nullable: true})
    @Column()
    level: string;

    @Field({nullable: true})
    @Column()
    answer: string;

    @Field({nullable: true})
    @Column()
    question_id: string;

    @Field({nullable: true})
    @Column()
    account_id: string;

    @Field({nullable: true})
    @Column()
    other_sickness: string;

    @Field({nullable: true})
    @Column()
    temperature: string;


    @Field({nullable: true})
    @Column()
    agreement: string;

    @Field({nullable: true})
    @Column()
    account_type: string;
    
    @Field({nullable: true})
    @Column()
    identifier: string; 

    @Field({nullable: true})
    @Column()
    date_created: Date;   

    @Field(() => [AccountModel], { nullable: true })
    @OneToMany(() => AccountModel, accountModel => accountModel.accountSurvey)
    accountModel?: Promise<AccountModel>

    
    @Field(() => [QuestionsModel], { nullable: true })
    @OneToMany(() => QuestionsModel, questionModel => questionModel.questionSurvey)
    questionModel?: Promise<QuestionsModel[]>
}

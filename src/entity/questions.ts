import { SurveyModel } from 'src/entity/survey';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@ObjectType()
@Entity({name: "tbl_question"})
export class QuestionsModel extends BaseEntity{

    @Field({nullable: true})
    @PrimaryGeneratedColumn()
    id: number;

    @Field({nullable: true})
    @Column()
    level: number;

    @Field({nullable: true})
    @Column()
    question: string;

    @Field({nullable: true})
    @Column()
    created_date: Date;

    @Field(() => [SurveyModel], { nullable: true })
    @ManyToOne(() => SurveyModel, surveyModel => surveyModel.questionModel)
    @JoinColumn({ name: 'id', referencedColumnName: 'question_id' })
    questionSurvey?: Promise<SurveyModel[]>
}

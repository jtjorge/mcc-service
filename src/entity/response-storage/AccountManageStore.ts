import { AccountModel } from 'src/entity/account';
import { Field, ObjectType, } from "@nestjs/graphql";

@ObjectType()
export class AccountManageStore {
    @Field(()=>[AccountModel],{nullable:true})
    data: AccountModel[]

    @Field({nullable:true})
    count: number
}

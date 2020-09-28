import { SurveyModel } from './../entity/survey';
import  RepositoryService from 'src/repository/repository.service';
import { AccountService } from './account.service';
import { AccountResolver } from './account.resolver';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModel } from 'src/entity/account';

@Module({
    imports:[TypeOrmModule.forFeature([AccountModel,SurveyModel])],
    providers: [AccountResolver,
                AccountService, 
                RepositoryService],
    exports: [AccountResolver,
              RepositoryService, 
              AccountService]
})
export class AccountModule {}

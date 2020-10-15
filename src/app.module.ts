import { surveyLoader } from './loaders/surveyLoader';
import { CacheModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './account/account.module';


@Module({
  imports: [
    GraphQLModule.forRoot({ 
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      installSubscriptionHandlers: true,
      debug: false,
      playground:true,
      subscriptions: {
        keepAlive: 5000,
      },
      context:({req, res})=>({req, res, surveyLoader: surveyLoader()})
    }),
    TypeOrmModule.forRoot(),
    AccountModule, 
    CacheModule.register()
  ],
  /*controllers: [AppController],
  providers: [AppService],*/
})
export class AppModule {}

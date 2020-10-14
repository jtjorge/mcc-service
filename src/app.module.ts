import { CacheModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './account/account.module';
import * as redisStore from 'cache-manager-redis-store';


@Module({
  imports: [
    GraphQLModule.forRoot({ 
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      installSubscriptionHandlers: true,
      debug: false,
      playground:false,
      subscriptions: {
        keepAlive: 5000,
      }
    }),
    TypeOrmModule.forRoot(),
    AccountModule, 
    CacheModule.register({
      store: redisStore,
    })
  ],
  /*controllers: [AppController],
  providers: [AppService],*/
})
export class AppModule {}

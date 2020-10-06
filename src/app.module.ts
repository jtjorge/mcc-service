import { Module } from '@nestjs/common';
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
      playground: false
    }),
    TypeOrmModule.forRoot(),
    AccountModule, 
  ],
  /*controllers: [AppController],
  providers: [AppService],*/
})
export class AppModule {}

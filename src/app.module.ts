import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthDeclarationModule } from './health-declaration/health-declaration.module';

@Module({
  imports: [
    GraphQLModule.forRoot({ 
      //Configure Graphql (codefirst)
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      installSubscriptionHandlers: true,
    }),
    TypeOrmModule.forRoot(), //database connection - ormconfig.json
    HealthDeclarationModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

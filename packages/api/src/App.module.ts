import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';

import { UserModule } from './User';
import { DatabaseModule } from './Database.module';
import { AuthModule } from './Auth';
import { PathModule } from './paths/Path.index';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PathModule,
    
    DatabaseModule,

    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      context: ({ req }) => ({ req })
    }),
  ],
})
export class AppModule { }

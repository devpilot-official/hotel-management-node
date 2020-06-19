import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import env from './config/env';

@Module({
  imports: [
    MongooseModule.forRoot(env.mongodb_uri, {
      keepAlive: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    AuthModule,
  ],
})
export class AppModule {}

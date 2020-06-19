import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import env from './config/env';
// import { AppConfigService } from './config/app/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD

  app.enableCors();
  await app.listen(env.port);
=======
  await app.listen(process.env.PORT || 3001);
>>>>>>> f2b893071bf7c60464ad1982d669344fda49b320
}
bootstrap();

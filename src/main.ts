import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import env from './config/env';
// import { AppConfigService } from './config/app/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(process.env.PORT || 5000);
}

bootstrap();

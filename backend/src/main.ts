import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT: string = process.env.PORT || '3001';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();

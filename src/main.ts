import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // Good practice for Vercel
  await app.listen(process.env.PORT || 3000);
}

// This is the important part for Vercel
export const handler = async (req: any, res: any) => {
  const app = await NestFactory.create(AppModule);
  await app.init();
  const instance = app.getHttpAdapter().getInstance();
  return instance(req, res);
};

if (process.env.NODE_ENV !== 'production') {
  bootstrap();
}
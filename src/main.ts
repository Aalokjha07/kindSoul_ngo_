import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express'; // Change this line

const server = express(); // This will now work without errors

export const createServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
  app.enableCors();
  await app.init(); // Ensure this is awaited
  return app;
};

export default async (req, res) => {
  await createServer(server);
  server(req, res);
};
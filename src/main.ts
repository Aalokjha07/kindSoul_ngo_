import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

// Create the Express instance once
const server = express();
let cachedApp: any; // Global variable to store the initialized app

export const bootstrap = async (expressInstance: any) => {
  // Only initialize if the app doesn't exist yet
  if (!cachedApp) {
    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressInstance),
    );
    
    app.enableCors();
    // Optional: app.setGlobalPrefix('api');
    
    await app.init();
    cachedApp = app; // Cache the instance
  }
  return cachedApp;
};

// Vercel Entry Point
export default async (req: any, res: any) => {
  await bootstrap(server);
  server(req, res);
};

// Local Development Support
// This allows you to run 'npm run start:dev' locally
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 3000;
  bootstrap(server).then(() => {
    server.listen(port, () => {
      console.log(`Ready on http://localhost:${port}`);
    });
  });
}
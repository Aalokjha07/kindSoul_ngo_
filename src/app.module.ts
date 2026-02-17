import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      // Add this line just to be safe:
     exclude: ['/api/:path*'], 
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
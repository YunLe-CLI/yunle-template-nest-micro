import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MicroModule } from '@micro/example';

@Module({
  imports: [MicroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module, Global } from '@nestjs/common';
import { MicroController } from './micro.controller';
import { MicroService } from './micro.service';

@Global()
@Module({
  controllers: [MicroController],
  providers: [MicroService],
  exports: [MicroService],
})
export class MicroModule {}

import { Module, Global } from '@nestjs/common';
import { MicroController } from './micro.controller';
import { MicroService } from './micro.service';

@Global()
@Module({
  controllers: [MicroController],
  providers: [MicroService],
})
export class MicroModule {}

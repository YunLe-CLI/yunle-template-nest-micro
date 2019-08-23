import { Controller, Get } from '@nestjs/common';
import { MicroService } from './micro.service';

@Controller('micro')
export class MicroController {
  constructor(private readonly service: MicroService) {}

  @Get()
  async getMicro(): Promise<any> {
    return await this.service.getHello();
  }
}

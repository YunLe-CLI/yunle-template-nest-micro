import { Controller, Get } from '@nestjs/common';
import { MicroService } from './micro.service';
import { IMicroInput, IMicroEntity } from './interfaces/micro.interface';

@Controller('micro')
export class MicroController {
  constructor(private readonly service: MicroService) {}

  @Get()
  async getMicro(data: IMicroInput): Promise<IMicroEntity> {
    return await this.service.getHello(data).toPromise();
  }
}

import { MicroService } from './micro.service';
import { IMicroEntity } from './interfaces/micro.interface';
export declare class MicroController {
    private readonly service;
    constructor(service: MicroService);
    getMicro(): Promise<IMicroEntity>;
}

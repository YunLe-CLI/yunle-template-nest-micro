import { MicroService } from './micro.service';
export declare class MicroController {
    private readonly service;
    constructor(service: MicroService);
    getMicro(): Promise<any>;
}

import { OnModuleInit } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IMicroInput, IMicroEntity } from './interfaces/micro.interface';
export declare class MicroService implements OnModuleInit {
    private readonly client;
    private uuidService;
    onModuleInit(): void;
    getHello(data: IMicroInput): Observable<IMicroEntity>;
}

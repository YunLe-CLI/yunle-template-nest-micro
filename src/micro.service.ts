import { Injectable, OnModuleInit } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcClientOptions } from './grpc-client.options';
import { IMicroInput, IMicroEntity } from './interfaces/micro.interface';

interface UuidService {
  createUuid(data: number): Observable<any>;
}

@Injectable()
export class MicroService implements OnModuleInit {
  @Client(grpcClientOptions)
  private readonly client: ClientGrpc;

  private uuidService: UuidService;

  onModuleInit() {
    this.uuidService = this.client.getService<UuidService>('Uuid');
  }

  getHello(data: IMicroInput): Observable<IMicroEntity> {
    return this.uuidService.createUuid(data.id);
  }

}

import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '192.168.103.100:9004',
    package: 'api',
    protoPath: join('../protobufs/', 'uuid.proto'),
    loader: {
      arrays: true,
    },
  },
};

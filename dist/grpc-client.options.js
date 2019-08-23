"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
exports.grpcClientOptions = {
    transport: microservices_1.Transport.GRPC,
    options: {
        url: '192.168.103.100:9004',
        package: 'api',
        protoPath: path_1.join(__dirname, '../../src/micro-users/protobufs/', 'uuid.proto'),
        loader: {
            arrays: true,
        },
    },
};
//# sourceMappingURL=grpc-client.options.js.map
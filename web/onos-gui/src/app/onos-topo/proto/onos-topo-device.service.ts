/*
 * Copyright 2019-present Open Networking Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Inject, Injectable} from '@angular/core';
import {DeviceServiceClient} from './github.com/onosproject/onos-topo/pkg/northbound/device/deviceServiceClientPb';
import {
    ListRequest, ListResponse
} from './github.com/onosproject/onos-topo/pkg/northbound/device/device_pb';
import * as grpcWeb from 'grpc-web';

type ListDeviceCallback = (r: ListResponse) => void;

@Injectable()
export class OnosTopoDeviceService {

    deviceServiceClient: DeviceServiceClient;

    constructor(@Inject('onosTopoUrl') private onosTopoUrl: string) {
        this.deviceServiceClient = new DeviceServiceClient(onosTopoUrl);

        console.log('Device Service Connecting to ', onosTopoUrl);
    }

    requestListDevices(subscribe: boolean, callback: ListDeviceCallback) {
        const listRequest = new ListRequest();
        listRequest.setSubscribe(subscribe);
        const stream = this.deviceServiceClient.list(listRequest, {});
        console.log('ListDevices sent to', this.onosTopoUrl);
        stream.on('data', callback);
    }
}

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

import {Component} from '@angular/core';
import {FnService, IconService, KeysService, LogService} from 'gui2-fw-lib';

@Component({
    selector: 'onos-root',
    templateUrl: './onos.component.html',
    styleUrls: ['./onos.component.css', './onos-theme.css']
})
export class OnosComponent {
    title = 'onos-gui';

    constructor(
        protected fs: FnService,
        protected ks: KeysService,
        protected log: LogService,
        protected is: IconService,
    ) {
        this.is.loadIconDef('bird');
        console.log('Constructed OnosComponent');
    }
}

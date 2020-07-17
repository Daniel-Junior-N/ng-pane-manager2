/********************************************************************************************************
 *
 * angular-pane-manager - a port of ng-pane-manager to Angular 2+ (ng-pane-leaf-templates.service.spec.ts)
 * Copyright (C) 2019 Opus Logica
 *
 * angular-pane-manager is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * angular-pane-manager is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with angular-pane-manager.  If not, see <https://www.gnu.org/licenses/>.
 *
 *******************************************************************************************************/

import {TestBed} from '@angular/core/testing';

import {NgPaneLeafTemplateService} from './ng-pane-leaf-templates.service';

describe('NgPaneLeafTemplatesService', () => {
    let service: NgPaneLeafTemplateService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(NgPaneLeafTemplateService);
    });

    it('should be created', () => { expect(service).toBeTruthy(); });
});

/********************************************************************************
 *
 * angular-pane-manager - a port of ng-pane-manager to Angular 2+ (layout-base.ts)
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
 *******************************************************************************/

import {LayoutGravity, PaneLayout} from './layout-core';

export abstract class LayoutBase {
    constructor(readonly gravity: LayoutGravity|undefined, readonly group: string|undefined) {}

    abstract transposeDeep(find: PaneLayout, replace: PaneLayout): PaneLayout|undefined;

    abstract simplifyDeep(): PaneLayout|undefined;
}

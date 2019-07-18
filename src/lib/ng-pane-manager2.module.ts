/****************************************************************************************
 *
 * ng-pane-manager2 - a port of ng-pane-manager to Angular 2+ (ng-pane-manager2.module.ts)
 * Copyright (C) 2019 Opus Logica
 *
 * ng-pane-manager2 is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ng-pane-manager2 is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with ng-pane-manager2.  If not, see <https://www.gnu.org/licenses/>.
 *
 ***************************************************************************************/

import {NgModule} from '@angular/core';

import {NgPaneLeafComponent} from './ng-pane-leaf.component';
import {NgPaneManagerComponent} from './ng-pane-manager.component';
import {NgPanelDirective} from './ng-panel.directive';

@NgModule({
    declarations: [NgPaneManagerComponent, NgPanelDirective, NgPaneLeafComponent],
    imports: [],
    exports: [NgPaneManagerComponent, NgPanelDirective],
    entryComponents: [NgPaneLeafComponent],
})
export class NgPaneManager2Module {
}

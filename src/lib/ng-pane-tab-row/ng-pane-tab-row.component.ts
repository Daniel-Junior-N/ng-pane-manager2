/******************************************************************************************
 *
 * ng-pane-manager2 - a port of ng-pane-manager to Angular 2+ (ng-pane-tab-row.component.ts)
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
 *****************************************************************************************/

import {Component, ElementRef, Input, ViewChild, ViewRef} from '@angular/core';

import {DraggablePaneComponent} from '../drag-n-drop';
import {LayoutNodeFactory} from '../layout-node-factory';
import {NgPaneRendererDirective} from '../ng-pane-renderer.directive';
import {BranchLayout, LayoutType} from '../pane-layout';

@Component({
    selector: 'lib-ng-pane-tab-row',
    template: '<ng-container libNgPaneRenderer></ng-container>',
    styleUrls: ['./ng-pane-tab-row.component.scss']
})
export class NgPaneTabRowComponent extends DraggablePaneComponent {
    @ViewChild(NgPaneRendererDirective, {static: true}) private renderer: NgPaneRendererDirective;

    private _layout: BranchLayout&{type: LayoutType.Tabbed};
    @Input() factory: LayoutNodeFactory;

    @Input()
    set layout(val: BranchLayout&{type: LayoutType.Tabbed}) {
        if (this._layout === val) return;

        this._layout = val;

        const oldViews: ViewRef[] = [];
        while (this.renderer.viewContainer.length)
            oldViews.push(this.renderer.viewContainer.detach());

        if (this._layout) {
            this._layout.children.forEach((child, idx) => {
                this.factory.placeTab(this.renderer.viewContainer, this._layout, idx);
            });
        }

        oldViews.forEach(e => e.destroy());
    }

    get layout(): BranchLayout&{type: LayoutType.Tabbed} { return this._layout; }

    constructor(public el: ElementRef<HTMLElement>) { super(); }
}

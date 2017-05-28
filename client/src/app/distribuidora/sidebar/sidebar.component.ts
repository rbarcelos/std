import { Component, Input } from '@angular/core';
import { SidebarMenuItemInfo } from "./sidebar.metadata";

declare var $: any;
@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    @Input()
    public menuItems: SidebarMenuItemInfo[];

    constructor() {
        $.getScript('../assets/js/sidebar-moving-tab.js');
    }

    ngOnInit() {

    }
}

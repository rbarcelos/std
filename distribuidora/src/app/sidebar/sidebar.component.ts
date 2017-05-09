import { Component, OnInit } from '@angular/core';
import { SidebarRoutes } from './sidebar.routes';

declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        // $.getScript('../../assets/js/sidebar-moving-tab.js');
        this.menuItems = SidebarRoutes.filter(menuItem => menuItem);
    }
}

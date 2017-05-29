import { SIDEBAR_ITEMS } from './admin.side';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SidebarMenuItemInfo } from "../common/sidebar/sidebar.metadata";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./assets/admin.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {
  public menuItems: SidebarMenuItemInfo[];
  constructor() { }

  ngOnInit() {
    this.menuItems = SIDEBAR_ITEMS;
  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SIDEBAR_ITEMS } from "./distribuidora.routes";
import { SidebarMenuItemInfo } from "../common/sidebar/sidebar.metadata";

@Component({
  selector: 'app-distribuidora',
  templateUrl: './distribuidora.component.html',
  styleUrls: ['./assets/distribuidora.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DistribuidoraComponent implements OnInit {
  public menuItems: SidebarMenuItemInfo[];
  constructor() { }

  ngOnInit() {
    this.menuItems = SIDEBAR_ITEMS;
  }

}

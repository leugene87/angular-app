import { Component, OnInit, Output, EventEmitter } from '@angular/core';


export class MenuItem {
  showSubMenu = false;
  public subItems: MenuItem[];
  constructor(public name: string, subItems: MenuItem[], public menuRouterLink?: string) {
    this.subItems = subItems;
  }
  public showHideSubMenu() {
    this.showSubMenu = !this.showSubMenu;
  }
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  // @ViewChild('sNav', { static: true }) sideNav: MatSidenav;
  @Output() menuSelected = new EventEmitter<string>();
  selectedMenu: string;
  currentMenu: string;
  currentSubmenu: string;
  menu: MenuItem[];
  private vendorMenuItem = new MenuItem('Vendors', [
    new MenuItem('Find Vendor', null, '/vendors'),
    new MenuItem('Vendor Master Report', null, '/notready')
  ]);
  private poMenuItem = new MenuItem('Purchase Orders', [
    new MenuItem('Find POs', null, '/notready'),
    new MenuItem('Web Service Aknowledgement', null, '/notready')
  ]);
  private userInfoMenu = new MenuItem('User Info', null, '/userinfo');
  constructor() {

  }
  ngOnInit() {
    this.menu = [this.vendorMenuItem, this.poMenuItem, this.userInfoMenu];
  }
  onSubItemClick(menuClicked: string) {
    this.menuSelected.emit(menuClicked);
  }

}


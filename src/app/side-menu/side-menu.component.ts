import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
    // @ViewChild('sNav', { static: true }) sideNav: MatSidenav;
    @Output('loadedMenuItem') menuSelected = new EventEmitter<string>();
    selectedMenu: string;
    currentMenu: string;
    currentSubmenu: string;
    private menu: MenuItemInterface[];
    private vendorMenuItem = new MenuItem("Vendors", [new MenuItem("Find Vendor", null, "/vendors"), new MenuItem("Vendor Master Report", null, "/")]);
    private poMenuItem = new MenuItem("Purchase Orders", [new MenuItem("Find POs", null, "/"), new MenuItem("Web Service Aknowledgement", null, "/")]);
    private userInfoMenu = new MenuItem("User Info", null, "/userinfo");
    constructor() {

    }
    ngOnInit() {
        this.menu = [this.vendorMenuItem, this.poMenuItem, this.userInfoMenu];
    }
    onSubItemClick(menuClicked: string) {
        this.menuSelected.emit(menuClicked);
    }

}
class MenuItem implements MenuItemInterface {
    private showSubMenu = false;
    constructor(public name: string, private subItems: MenuItem[], private menuRouterLink?: string) {
    }
    showHideSubMenu() {
        this.showSubMenu = !this.showSubMenu;
    }
}


interface MenuItemInterface {
    name: string;

}

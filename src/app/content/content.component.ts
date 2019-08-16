import { Component, OnInit, OnDestroy } from '@angular/core';
import { Vendor } from '../shared/models/vendor.model';
import { VendorAccountsService } from '../shared/vendor-data.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {
    private foundVendors: Vendor[];
    private isSearchingSubsription: Subscription;
    public loginInProccess: boolean = false;
    constructor(private venSearchServ: VendorAccountsService) {

    }

    ngOnInit() {
        this.isSearchingSubsription = this.venSearchServ.isSearchingSubject.subscribe(isSearching => {
            this.loginInProccess = isSearching;
        });
    }

    onVendorsFound(result: Vendor[]) {
        this.foundVendors = result;
    }
    ngOnDestroy() {
        this.isSearchingSubsription.unsubscribe();
    }

}

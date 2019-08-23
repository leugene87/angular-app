import { Component, OnInit, OnDestroy } from '@angular/core';
import { Vendor } from '../shared/models/vendor.model';
import { VendorAccountsService } from '../services/vendor-data.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {
    private isSearchingSubsription: Subscription;
    public loginInProccess: boolean = false;
    constructor(private venSearchServ: VendorAccountsService) {

    }

    ngOnInit() {
        this.isSearchingSubsription = this.venSearchServ.isSearchingSubject.subscribe(isSearching => {
            this.loginInProccess = isSearching;
        });
    }

    ngOnDestroy() {
        this.isSearchingSubsription.unsubscribe();
    }

}

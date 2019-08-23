import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { VendorAccountsService } from '../../services/vendor-data.service';
import { Vendor } from '../../shared/models/vendor.model';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.css'],
    //  providers: [VendorAccountsService]
})
export class SearchFormComponent implements OnInit {
    @Output() vendorsSearch = new EventEmitter<Vendor[]>();

    errorMsg: string;
    constructor(private accServ: VendorAccountsService) { }

    ngOnInit() {
    }

    doSearch(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const formValue = form.value;
        this.accServ.isSearchingSubject.next(true);
        this.accServ.findVendors(formValue.criteria, formValue.searchValue).subscribe(
            foundVens => {
                this.vendorsSearch.emit(foundVens);
                this.accServ.vendorsSearchSubject.next(foundVens);
                this.accServ.isSearchingSubject.next(false);
            },
            error => {
                this.errorMsg = error.statusText as string;
                this.accServ.isSearchingSubject.next(false);
            });
    }
    onCriteriaChanged(criteria: string, form: NgForm) {
        if (criteria === 'account' || criteria === 'name') {
            form.value.searchValue.minLength = 3;
        }
    }

}

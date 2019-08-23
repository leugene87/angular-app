import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Vendor } from 'src/app/shared/models/vendor.model';
import { VendorAccountsService } from 'src/app/services/vendor-data.service';
import { Subscription } from 'rxjs';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
    @Input('log') isLogginning: boolean;
    displayedColumns: string[] = ['id', 'account', 'name'];
    dataSource: MatTableDataSource<Vendor> = new MatTableDataSource();
    vendors: Vendor[];
    vendorsCubscription: Subscription;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(private vendorSearchService: VendorAccountsService) {
    }

    ngOnInit() {
        this.vendorsCubscription = this.vendorSearchService.vendorsSearchSubject.subscribe(vendors => {
            this.vendors = vendors;
            this.dataSource = new MatTableDataSource(this.vendors);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;

        });
    }

    ngOnDestroy() {
        this.vendorsCubscription.unsubscribe();
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}





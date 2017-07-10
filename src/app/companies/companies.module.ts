import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesOutletComponent } from './companies-outlet/companies-outlet.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompaniesUpdateFiscalInfoComponent } from './companies-update-fiscal-info/companies-update-fiscal-info.component';
import { CompaniesUpdateCsdComponent } from './companies-update-csd/companies-update-csd.component';
import { CompaniesUpsertComponent } from './companies-upsert/companies-upsert.component';

@NgModule({
    imports: [
        CommonModule,
        CompaniesRoutingModule
    ],
    declarations: [
        CompaniesOutletComponent,
        CompaniesListComponent,
        CompaniesUpdateFiscalInfoComponent,
        CompaniesUpdateCsdComponent,
        CompaniesUpsertComponent
    ]
})
export class CompaniesModule { }

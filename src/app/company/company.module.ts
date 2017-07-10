import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyListComponent } from './company-list/company-list.component';

@NgModule({
    imports: [
        CommonModule,
        CompanyRoutingModule
    ],
    declarations: [
        CompanyComponent,
        CompanyCreateComponent,
        CompanyEditComponent,
        CompanyListComponent
    ]
})
export class CompanyModule { }

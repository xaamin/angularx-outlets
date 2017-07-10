import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompaniesOutletComponent } from './companies-outlet/companies-outlet.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompaniesUpdateFiscalInfoComponent } from './companies-update-fiscal-info/companies-update-fiscal-info.component';
import { CompaniesUpdateCsdComponent } from './companies-update-csd/companies-update-csd.component';
import { CompaniesUpsertComponent } from './companies-upsert/companies-upsert.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/companies/module/(outlet:create)',
            },
            {
                path: 'module',
                component: CompaniesOutletComponent,
                children: [
                    {
                        path: 'create',
                        pathMatch: 'full',
                        component: CompaniesUpsertComponent,
                        outlet: 'outlet'
                    },
                    {
                        path: 'edit/:uuid',
                        pathMatch: 'full',
                        component: CompaniesUpsertComponent,
                        outlet: 'outlet'
                    }
                ]
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }

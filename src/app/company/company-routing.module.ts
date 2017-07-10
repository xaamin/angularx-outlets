import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyComponent } from './company.component';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyListComponent } from './company-list/company-list.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Empresas'
        },
        children: [
            {
                path: '',
                redirectTo: 'action',
            },
            {
                path: 'action',
                component: CompanyListComponent,
                children: [
                    {
                        path: 'create',
                        pathMatch: 'full',
                        component: CompanyCreateComponent,
                        outlet: 'modal'
                    },
                    {
                        path: 'edit',
                        pathMatch: 'full',
                        component: CompanyEditComponent,
                        outlet: 'modal'
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
export class CompanyRoutingModule { }

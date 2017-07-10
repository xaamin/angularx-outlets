import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
    {
       path: '',
       component: LayoutComponent,
       data: {
           title: 'Home',
       },
       children: [
           {
               path: 'company',
               loadChildren: './company/company.module#CompanyModule',
           },
           {
               path: 'companies',
               loadChildren: './companies/companies.module#CompaniesModule',
           }
       ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

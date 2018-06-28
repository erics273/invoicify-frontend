import { NgModule }             from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AuthGuard } from '../auth-guard.service';

import { CompanyComponent }   from '../company/company.component';
import { CompanyFormComponent }   from '../company-form/company-form.component';
import { HomeComponent }   from '../home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'company',  component: CompanyComponent, canActivate: [AuthGuard] },
  { path: 'company/edit/:id', component: CompanyFormComponent, canActivate: [AuthGuard] },
  { path: 'company/add', component: CompanyFormComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

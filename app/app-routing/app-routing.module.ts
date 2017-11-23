import { AdminHomeComponent } from './../admin/admin-home/admin-home.component';
import { AdminComponent } from './../admin/admin.component';
import { LoginComponent } from './../login/login.component';
import { RegisterComponent } from './../register/register.component';
import { AdminProfileComponent } from './../admin/admin-profile/admin-profile.component';
import { UserComponent } from '../user/user.component';
import { AddCategoryComponent } from '../category/add-category/add-category.component';
import { ManageCategoryComponent } from '../category/manage-category/manage-category.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          },
          {
            path: 'home',
            component: AdminHomeComponent,
          },
          {
            path: 'profile',
            component: AdminProfileComponent,
          },
          {
            path: 'users',
            component: UserComponent
          },
          {
            path: 'category',
            component: AddCategoryComponent
          },
          {
            path: 'manage-category',
            component: ManageCategoryComponent
          }
        ]
    }
    ])
  ],
  declarations: [],
  exports: [ RouterModule, RouterLinkActive]
})
export class AppRoutingModule { }

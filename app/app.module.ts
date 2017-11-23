import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material';
import { HttpModule } from "@angular/http";
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { UserComponent } from './user/user.component';
import { DataService,CustomInterceptor } from './services/dataService.service';
import { Configuration } from './app.constants';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { ManageCategoryComponent } from './category/manage-category/manage-category.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    AddCategoryComponent,
    ManageCategoryComponent
   // UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    HttpModule,
    HttpClientModule   
  ],
  providers: [
    Configuration,
    DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

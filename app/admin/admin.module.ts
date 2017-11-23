import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { UserComponent } from '../user/user.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule,Router} from '@angular/router';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminService} from './../services/admin.service';
import { AuthenticationService} from './../services/authentication.service';
import { UserService} from './../services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminHomeComponent,
    AdminProfileComponent,
    UserComponent,
    ChatComponent
  ],
  providers:[
    AuthenticationService,
    AdminService,
    UserService
  ],
  exports: [AdminComponent]
})
export class AdminModule { }

import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthenticationService, User} from './../services/authentication.service';
import {AdminService} from './../services/admin.service';
@Component({
  selector: 'app-admin',
  providers: [AuthenticationService],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor(private _service:AuthenticationService,private _admindata:AdminService) { }

  ngOnInit() {
    // add the the body classes
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');
    this._service.checkCredentials();
    this._admindata.getAdminData();
  }

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
  }
  logout() {
    this._service.logout();
  }


}

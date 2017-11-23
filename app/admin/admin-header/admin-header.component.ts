import { Component, OnInit } from '@angular/core';
import {AuthenticationService, User} from './../../services/authentication.service';
import {AdminService} from './../../services/admin.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  public admin:any;
  constructor(private _service:AuthenticationService,private _admindata:AdminService) { }

  ngOnInit() {
    this._service.checkCredentials();

    var data:any=this._admindata.getAdminData();
    this.admin=data;
  }
  logout() {
    this._service.logout();
  }
}

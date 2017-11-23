import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../services/admin.service';

@Component({
  selector: 'app-admin-profile',
  providers: [AdminService],
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  public admin:any;
  
  constructor(private _admindata:AdminService) { }
  
  ngOnInit() {
    console.log(this._admindata.getAdminData());
   //return this._admindata.getAdminData();
    var data:any=this._admindata.getAdminData();
    this.admin=data;
  }
  
}

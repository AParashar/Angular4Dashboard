import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService, User} from './../services/authentication.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule} from '@angular/material';



@Component({
  selector: 'app-login',
  providers: [AuthenticationService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public user = new User('','');
  public errorMsg = '';
  loading = false;

  constructor(private _service:AuthenticationService) {}
  ngOnInit(){
    this._service.checkCredentials();
  }
  login() {
    this.loading = true;
      if(!this._service.login(this.user)){
          this.loading = false;
          this.errorMsg = 'Failed to login';
      }
  }

}

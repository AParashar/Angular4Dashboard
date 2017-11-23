import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { DataService } from '../services/dataService.service';
import { Router} from '@angular/router';

export class Users {
  constructor(
    public firstName: string,
    public lastName: string,
    public gender: string,
  ) {  }
}
export class Search {
  constructor(
    public id:number=0
  ) {  }
}
@Component({
  selector: 'app-user',
  providers:[UserService],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:any[]=[];
  gender:any[] = ['','Male','Female'];
  model = new Users('','','');
  isList = true;
  submitted = false;
  search = new Search();
  active = true;
  nodata = false;
  loading= true;
  constructor(
    private _users:UserService,
    private _dataService:DataService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._dataService.getAll<any[]>().subscribe(
          (data: any[]) =>{console.log(this.users =data);
          if(data == null){
            this.nodata =true;
          }
        },
        error => () => {
            console.log('error', 'Damn', 'Something went wrong...');
        },
        () => {
          console.log('success', 'Complete', 'Getting all values complete');  
          this.loading=false;
        });        
  }


  addUser(){
    this.isList =false;
  }
  onSubmit() { 
    this.submitted = true; 
    this._dataService.add(this.model).subscribe(
      (data:any[]) => console.log(data),
      error => () => {
          console.log('error', 'Damn', 'Something went wrong...');
      },
      () => {
        console.log('success', 'Complete', 'Save Single values complete');  
        this.refresh(); 
      });
  }
  refresh(): void {
    this.ngOnInit();
    this.model = new Users('','', '');
    this.active = false;
    this.isList=true;
}
  newUser() {
    this.model = new Users('','', '');
    this.active = false;
    this.isList = true;
    setTimeout(() => this.active = true, 0);
  }

  default() {
    this.model = new Users('jashpal','chauhan','Male');
  }
  get diagnostic() { 
    return JSON.stringify(this.model); 
  }
  cancel(){
    this.model = new Users('','', '');
    this.active = false;
    this.isList = true;
    setTimeout(() => this.active = true, 0);
  }
  getById(event){
   
    this.search.id;
    if(this.search.id == 0 ){
     this.ngOnInit(); 
     //this.nodata =true;  
     event.stopPropagation();
    }
    this._dataService
    .getSingle<any[]>(this.search.id)
    .subscribe(
      (data:any[]) => this.users=[data],
      error => () => {
          console.log('error', 'Damn', 'Something went wrong...');
      },
      () => {
        console.log('success', 'Complete', 'Getting Single values complete');       
      });
      event.stopPropagation();
  }
}

import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
//import { DataService } from '../services/dataService.service';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
  private url:string='http://localhost:3622/api/usersapi';
  constructor(private _http: Http) {}

    getUsers(){
     return this._http.get(this.url)
      // Call map on the response observable to get the parsed people object
      .map((responce:Response) => responce.json());
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      //.subscribe(user => this.users = user);
     
 
  }
  saveUser(user){
    console.log(JSON.stringify(user));  
    // return this._http
    // .post(this.url, user, {headers: this.headers})
    // .toPromise()
    // //.then(res => res.json().data as Hero)
    // .catch(this.handleError);

   let headers = new Headers();
    
   headers.append('Content-Type', 'application/json; charset=utf-8');
   headers.append('Access-Control-Allow-Origin', '*');
   let options = new RequestOptions({ headers: headers });
   console.log('User add successfully..');
   return this._http.post(this.url, user,options).subscribe();
   
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  updateUser(){
    
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class AdminService {
  public data :any;
  constructor() { }

  public getAdminData(){
   // console.log('call service');
   return this.data={
      name:'Jashpal Chauhan',
      designation:'Web Developer',
      since:'Dec. 2015',
      education:'B.C.A in Computer Application from the University of North Gujarat',
      location:'Ahmedabad',
      skills:['PHP','UI Design','Coding','Javascript','Node.js','AngularJS/2/4','Codeigniter'],
      notes:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.'
    }
  }
}

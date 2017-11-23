import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Configuration } from '../app.constants';

@Injectable()
export class DataService {

    private actionUrl: string;

    constructor(private http: HttpClient, private _configuration: Configuration) {
        this.actionUrl = _configuration.ServerWithApiUrl + 'usersapi/';
    }

    public getAll<T>(): Observable<T> {
        return this.http.get<T>(this.actionUrl);
    }

    public getSingle<T>(id: number): Observable<T> {       
        return this.http.get<T>(this.actionUrl + id);
    }

    public add<T>(itemAdd: any): Observable<T> {       
      return this.http.post<T>(this.actionUrl, JSON.stringify(itemAdd));    
    }

    public update<T>(id: number, itemToUpdate: any): Observable<T> {
        return this.http.put<T>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    }

    public delete<T>(id: number): Observable<T> {
        return this.http.delete<T>(this.actionUrl + id);
    }

}


@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // get the token from a service
        //const token: string = this.currentUserService.token;

        // add it if we have one
        /*if (token) {
            req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
        }*/


        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        console.log(JSON.stringify(req.headers));
        return next.handle(req);
    }
}
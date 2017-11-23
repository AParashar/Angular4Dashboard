import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public SERVER_URL = 'http://localhost:3622/';
    public API_URL = 'api/';
    public ServerWithApiUrl = this.SERVER_URL + this.API_URL;
    public LOGIN_URL_END_POINT='/token';
}
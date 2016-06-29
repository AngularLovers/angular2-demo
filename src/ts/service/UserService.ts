import {Injectable} from '@angular/core';
import { Http }from '@angular/http';
import * as api from './../api/Api';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UserService {
    constructor(public http:Http) {
        this.http = http;
    }

    findAll():Observable<any> {
        return this.http.get(api.findAll).map((res:any)=> {
            return res.json();
        });
    }
}

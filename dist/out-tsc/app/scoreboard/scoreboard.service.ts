import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ScoreService {

    apuURL = 'http://localhost:8080/score';

    constructor(private _http: HttpClient){ }

    saveEmployee(empname: any) : Observable<any>{

        return this._http.post(this.apuURL, empname);

    }

}

  
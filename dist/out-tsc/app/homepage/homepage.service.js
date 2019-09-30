import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let DataService = class DataService {
    constructor(_http) {
        this._http = _http;
        this.apuURL = 'http://localhost:8080/home';
    }
    getUsers() {
        return this._http.get(this.apuURL);
    }
};
DataService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], DataService);
export { DataService };
//# sourceMappingURL=homepage.service.js.map
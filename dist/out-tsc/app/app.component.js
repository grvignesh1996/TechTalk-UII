import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
// import { DataService } from './data.service';
// import { Employee} from './employee.model';
let AppComponent = class AppComponent {
    // users$: Employee[];
    // data : any;
    constructor() { }
    // private dataservice: DataService
    ngOnInit() {
        // return this.dataservice.getUsers()
        //   .subscribe(data => {
        //   this.users$ = this.data
        // });
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map
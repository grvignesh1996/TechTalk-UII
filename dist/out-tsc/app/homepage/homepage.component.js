import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HomepageComponent = class HomepageComponent {
    constructor(apiservice) {
        this.apiservice = apiservice;
    }
    ngOnInit() {
        this.apiservice.getUsers().subscribe((data) => {
            console.log(data);
            this.users = data;
        });
    }
};
HomepageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-homepage',
        templateUrl: './homepage.component.html',
        styleUrls: ['./homepage.component.css']
    })
], HomepageComponent);
export { HomepageComponent };
//# sourceMappingURL=homepage.component.js.map
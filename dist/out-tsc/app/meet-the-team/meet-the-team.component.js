import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let MeetTheTeamComponent = class MeetTheTeamComponent {
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
MeetTheTeamComponent = tslib_1.__decorate([
    Component({
        selector: 'app-meet-the-team',
        templateUrl: './meet-the-team.component.html',
        styleUrls: ['./meet-the-team.component.css']
    })
], MeetTheTeamComponent);
export { MeetTheTeamComponent };
//# sourceMappingURL=meet-the-team.component.js.map
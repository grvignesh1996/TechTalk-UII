import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { Team1Component } from './team1/team1.component';
import { Team2Component } from './team2/team2.component';
const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomepageComponent },
    { path: 'meet', component: MeetTheTeamComponent },
    { path: 'team1', component: Team1Component },
    { path: 'team2', component: Team2Component }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map
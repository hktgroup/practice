var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PingPage } from '../ping/ping';
import { ProfilePage } from '../profile/profile';
import { TrackPage } from '../track/track';
import { StatsPage } from '../Stats/Stats';
import { AuthService } from '../../services/auth/auth.service';
export var TabsPage = (function () {
    function TabsPage(auth) {
        this.auth = auth;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = PingPage;
        this.tab2Root = ProfilePage;
        this.tab3Root = TrackPage;
        this.tab4Root = StatsPage;
    }
    TabsPage = __decorate([
        Component({template:/*ion-inline-start:"/Users/kevinisaza/node/ec0/ionic/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Ping" tabIcon="pulse"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Track" tabIcon="bicycle"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Profile" tabIcon="person"></ion-tab>\n    \n  <ion-tab [root]="tab4Root" tabTitle="Stats" tabIcon="stats"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/kevinisaza/node/ec0/ionic/src/pages/tabs/tabs.html"*/
        }), 
        __metadata('design:paramtypes', [AuthService])
    ], TabsPage);
    return TabsPage;
}());
//# sourceMappingURL=tabs.js.map
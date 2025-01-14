import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { AuthApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { PingPage } from '../pages/ping/ping';
import { StatsPage } from '../pages/Stats/Stats';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { AuthService } from '../services/auth/auth.service';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { TrackPage} from '../pages/track/track';

let storage: Storage = new Storage();

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => storage.get('id_token'))
  }), http);
}

@NgModule({
  declarations: [
    AuthApp,
    ProfilePage,
    PingPage,
    TabsPage,
    TrackPage,
    StatsPage
  ],
  imports: [
    IonicModule.forRoot(AuthApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AuthApp,
    ProfilePage,
    PingPage,
    TabsPage,
    TrackPage,
    StatsPage
  ],
  providers: [
    AuthService,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    }
  ]
})
export class AppModule {}

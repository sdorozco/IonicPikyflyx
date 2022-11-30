import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { firebaseConfig } from '../environments/environment'
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule} from "@angular/fire/firestore";
import { AngularFireAuthModule} from "@angular/fire/auth";
import { IonicStorageModule } from "@ionic/storage-angular";
import { Camera } from '@ionic-native/camera/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig),
AngularFireAuthModule,AngularFirestoreModule,IonicStorageModule.forRoot()],
  providers: [Camera,ScreenOrientation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

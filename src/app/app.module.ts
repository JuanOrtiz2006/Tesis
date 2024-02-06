import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"registrodeusuarios-63ef6","appId":"1:735790375120:web:b93fb8f78426d471707ed5","storageBucket":"registrodeusuarios-63ef6.appspot.com","apiKey":"AIzaSyDWkJhxP4Cg3rL7rp7w5gpSAeg-nXIQw_E","authDomain":"registrodeusuarios-63ef6.firebaseapp.com","messagingSenderId":"735790375120"})), provideAuth(() => getAuth())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

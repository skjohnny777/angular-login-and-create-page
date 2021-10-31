import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FirebaseService } from './services/firebase.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBXcJYyXCI69ajKJSh33fGwuMRguy7Yxcg",
      authDomain: "login-430ed.firebaseapp.com",
      projectId: "login-430ed",
      storageBucket: "login-430ed.appspot.com",
      messagingSenderId: "564238507143",
      appId: "1:564238507143:web:b47c5121c5341d78e12c22"
    }),
    NgbModule,
    BrowserAnimationsModule

    

  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

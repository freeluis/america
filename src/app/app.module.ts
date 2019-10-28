import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { Facebook } from '@ionic-native/facebook';
import { AlineacionPage } from '../pages/alineacion/alineacion';
import { PlantillaPage } from '../pages/plantilla/plantilla';
import { NoticiasPage } from '../pages/noticias/noticias';
import { ExpandableComponent } from '../components/components-expandable/components-expandable';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlineacionPage,
    LoginPage,
    RegistroPage,
    PlantillaPage,
    NoticiasPage,
    ExpandableComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

  ],
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlineacionPage,
    LoginPage,
    RegistroPage,
    PlantillaPage,
    NoticiasPage,
  ],
  providers: [

    StatusBar,
    SplashScreen,
    Facebook,
    { provide: ErrorHandler, useClass: IonicErrorHandler },

  ]
})
export class AppModule { }

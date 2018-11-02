import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/Storage';

import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { Network } from '@ionic-native/network/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MyApp } from './app.component';

import { EmitService } from '@services/emit.service';

import { MyErrorHandler } from './error.handler';
// import { RavenErrorHandler } from './raven-error-handler.';

@NgModule({
  declarations: [MyApp],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  bootstrap: [MyApp],
  entryComponents: [MyApp],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    StatusBar,
    SplashScreen,
    BackgroundMode,
    File,
    FileTransfer,
    FileOpener,
    Insomnia,
    Network,
    // { provide: ErrorHandler, useClass: MyErrorHandler },
    EmitService,
    // { provide: ErrorHandler, useClass: RavenErrorHandler }
  ],
})
export class AppModule {}

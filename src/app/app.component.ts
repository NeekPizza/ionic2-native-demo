import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goToVibrate(){
    this.nav.push('VibrationPage');
  }

  goHome(){
    this.nav.setRoot(HomePage);
  }

  goToGeoLocation(){
    this.nav.push('GeoLocationPage');

  }

  goToCamera(){
    this.nav.push('CameraPage');

  }

  goToBarcodeScanner(){
    this.nav.push('BarcodePage');

  }

  goToDeviceMotion(){
    this.nav.push('DeviceMotionPage');

  }

  goToLocalNotifications(){
    this.nav.push('LocalNotificationsPage');

  }

}

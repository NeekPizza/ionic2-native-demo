import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';


/**
 * Generated class for the DeviceMotionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-device-motion-page',
  templateUrl: 'device-motion-page.html',
})
export class DeviceMotionPage {

  data: any;
  subscription: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private deviceMotion: DeviceMotion) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceMotionPage');
  }

  start(){
    var options = {
      frequency: 500
    };

    this.subscription = this.deviceMotion.watchAcceleration(options).subscribe((acceleration: DeviceMotionAccelerationData) => {
      this.data = acceleration;
    })
  }

  stop(){
    this.subscription.unsubscribe();

  }

}

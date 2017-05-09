import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeviceMotionPage } from './device-motion-page';

@NgModule({
  declarations: [
    DeviceMotionPage,
  ],
  imports: [
    IonicPageModule.forChild(DeviceMotionPage),
  ],
  exports: [
    DeviceMotionPage
  ]
})
export class DeviceMotionPageModule {}

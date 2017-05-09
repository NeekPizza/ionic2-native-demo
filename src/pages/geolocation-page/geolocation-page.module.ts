import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeoLocationPage } from './geolocation-page';

@NgModule({
  declarations: [
    GeoLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(GeoLocationPage),
  ],
  exports: [
    GeoLocationPage
  ]
})
export class GeolocationPageModule {}

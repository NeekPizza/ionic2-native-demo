import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalNotificationsPage } from './local-notifications-page';
import { LocalNotifications } from '@ionic-native/local-notifications';


@NgModule({
  declarations: [
    LocalNotificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalNotificationsPage),
  ],
  exports: [
    LocalNotificationsPage
  ]
})
export class LocalNotificationsPageModule {}

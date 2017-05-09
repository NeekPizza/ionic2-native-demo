import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';


@IonicPage()
@Component({
  selector: 'page-local-notifications-page',
  templateUrl: 'local-notifications-page.html',
})
export class LocalNotificationsPage {

  results: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private localNotifications: LocalNotifications) {
      this.localNotifications.on('click', notification => {
        var data = JSON.parse(notification.data);
        this.results = data.name;
        alert(`Notification received! (${data.name})`);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalNotificationsPage');
  }

  schedule(){
    this.localNotifications.schedule({
      id: 1,
      title: 'Cool Notification',
      text: 'This is my cool notification!',
      data: {
        id: 21,
        name: 'Cool Notification #21'
      }
    });
  }

}

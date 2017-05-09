import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


/**
 * Generated class for the BarcodePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-barcode-page',
  templateUrl: 'barcode-page.html',
})
export class BarcodePage {

  results: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodePage');
  }

  scan(){
    this.barcodeScanner.scan().then((barcodeData) => {
      this.results = barcodeData;
    }, (err) => {
      alert(`Error Scanning: ${err}`)
    });
  }

  reset(){
    this.results = null;
  }

  lookup(){
    window.open(`http://www.upcindex.com/${this.results.text}`,'_system');
  }
}

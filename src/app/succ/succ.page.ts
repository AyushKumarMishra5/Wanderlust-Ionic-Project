import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'succ',
  templateUrl: './succ.page.html',
  styleUrls: ['./succ.page.scss'],
})
export class SuccPage{

  constructor(private navCtrl: NavController) {}

  goToHomePage() {
    this.navCtrl.navigateRoot('tab1'); 
  }

}

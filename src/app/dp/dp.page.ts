import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dp',
  templateUrl: './dp.page.html',
  styleUrls: ['./dp.page.scss'],
})
export class DpPage implements OnInit {
  images: string[] = [
    'assets/images/card-1.jpg',
    'assets/images/card-2.jpg',
    'assets/images/card-3.jpg',
    'assets/images/card-4.jpg',
    'assets/images/card-5.jpg',
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}


  goBack() {
    this.navCtrl.back();
  }

  // goForward() {
  //   // Implement navigation to the next page or specific route
  //   this.navCtrl.navigateForward('/next-page'); // Replace '/next-page' with your actual route
  // }
}

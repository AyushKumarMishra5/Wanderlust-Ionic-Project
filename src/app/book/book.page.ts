import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  navigateToDpPage() {
    this.navCtrl.navigateForward('dp');
  }

  navigateToBookingPage() {
    this.navCtrl.navigateForward('booking'); // Adjust 'booking' to the actual route name for BookingPage
  }


  ngOnInit() {
  }

}

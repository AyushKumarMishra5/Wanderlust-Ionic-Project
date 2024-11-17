import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sedan-2',
  templateUrl: './sedan-2.page.html',
  styleUrls: ['./sedan-2.page.scss'],
})
export class Sedan2Page {
  pickupLocation: string = '';
  dropLocation: string = '';
  travelTime: string = '';
  distance: number = 0;
  price: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  calculatePrice() {
    if (this.distance <= 100) {
      this.price = 2000;
    } else {
      this.price = 3000;
    }
  }

  continueBooking() {
    if (!this.pickupLocation || !this.dropLocation || !this.travelTime || !this.distance) {
      console.log("All fields are required.");
      alert('Please fill all fields before continuing.');
      return;
    }
    this.calculatePrice();

    console.log("Continue button clicked");
    console.log("Pickup Location:", this.pickupLocation);
    console.log("Drop Location:", this.dropLocation);
    console.log("Travel Time:", this.travelTime);
    console.log("Distance:", this.distance);
    console.log("Price:", this.price);

    this.router.navigate(['/booking-summary'], {
      queryParams: {
        pickup: this.pickupLocation,
        drop: this.dropLocation,
        time: this.travelTime,
        distance: this.distance,
        price: this.price,
      },
    });
  }
}

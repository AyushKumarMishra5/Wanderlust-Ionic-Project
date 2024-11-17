import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'hotel',
  templateUrl: './hotel.page.html',
  styleUrls: ['./hotel.page.scss'],
})
export class HotelPage{

  query: string = '';



  stays = [
    {
      title: 'The Ritz-Carlton, New York Park.',
      price: 250,
      rating: 5.0,
      reviews: 29,
      image: 'assets/images/card-1.jpg'
    },
    {
      title: 'Entire Cabin',
      price: 267,
      rating: 4.9,
      reviews: 57,
      image: 'assets/images/card-2.jpg'
    },
    {
      title: 'Grand Vista Resort',
      price: 267,
      rating: 4.9,
      reviews: 57,
      image: 'assets/images/card-3.jpg'
    },

    {
      title: 'Oceanview Retreat',
      price: 267,
      rating: 4.9,
      reviews: 57,
      image: 'assets/images/card-4.jpg'
    },

    {
      title: 'Majestic Palace Inn',
      price: 267,
      rating: 4.9,
      reviews: 57,
      image: 'assets/images/card-5.jpg'
    },

    {
      title: 'Serene Sands Hotel',
      price: 267,
      rating: 4.9,
      reviews: 57,
      image: 'assets/images/card-6.jpg'
    },

    {
      title: 'Velvet Sky Resort',
      price: 267,
      rating: 4.9,
      reviews: 57,
      image: 'assets/images/card-7.jpg'
    }

  ];
  originalStays = [...this.stays];
  activities = [
    { name: 'Air balloon', image: 'assets/images/p.jpg' },
    { name: 'Baggi', image: 'assets/images/1.jpg' },
    { name: 'Surfing', image: 'assets/images/o.jpg' },
  ];

  onSearchChange(event: any) {
    const searchTerm = event.detail.value.toLowerCase();
    this.query = searchTerm;
    this.querySearch();
  }

  querySearch() {
    if (this.query.trim() === '') {
      this.stays = [...this.originalStays];
    } else {
      this.stays = this.originalStays.filter((stay) =>
        stay.title.toLowerCase().includes(this.query)
      );
    }
  }

  getStarArray(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;

    const stars = Array(fullStars).fill('star'); // Full stars
    if (halfStar) {
      stars.push('star-half'); // Half star if needed
    }
    while (stars.length < 5) {
      stars.push('star-outline');
    }
    return stars;
  }

  constructor(private navCtrl: NavController, private router: Router) {}

   // Method to navigate based on the card click
  goToBookPage(stay: any) {
    if (stay.title === 'The Ritz-Carlton, New York Park.') {
      // Navigate to the book page for this specific card
      this.router.navigate(['book'], {
        queryParams: {
          title: stay.title,
          price: stay.price,
          rating: stay.rating,
          reviews: stay.reviews,
          image: stay.image
        }
      });
    }
  }

  // Navigate to the Home page
  goBack() {
    this.navCtrl.navigateBack('/home');  // Replace '/home' with your actual home page path
  }

  // Navigate to the next page
  goNext() {
    this.navCtrl.navigateForward('/next');  // Replace '/next' with the next page path
  }

}

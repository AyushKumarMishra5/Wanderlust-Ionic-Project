import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  bookingForm: FormGroup;
  today: string = new Date().toISOString(); // Current date in ISO format

  constructor(
    private fb: FormBuilder,
    private router: Router // Inject Router
  ) {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      guests: ['', [Validators.required, Validators.min(1)]],
      checkinDate: ['', Validators.required],
      checkoutDate: ['', Validators.required],
    });
  }

  ngOnInit() {}

  submitBooking() {
    if (this.bookingForm.valid) {
      console.log('Booking Data:', this.bookingForm.value);
      alert('Booking successful!');
      this.router.navigate(['/home']); // Navigate to home after booking
    } else {
      alert('Please complete all required fields');
    }
  }
}

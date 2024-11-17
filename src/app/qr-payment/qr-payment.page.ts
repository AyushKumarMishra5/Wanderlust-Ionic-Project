import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qr-payment',
  templateUrl: './qr-payment.page.html',
  styleUrls: ['./qr-payment.page.scss'],
})
export class QrPaymentPage implements OnInit {

  minutes: number = 2; 
  seconds: number = 0; 

  constructor() {}

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    let timer = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          clearInterval(timer);
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      } else {
        this.seconds--;
      }
    }, 1000);
  }
  eeStatus() {
    console.log("See Your Status button clicked");
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-tour-1',
  templateUrl: './tour-1.page.html',
  styleUrls: ['./tour-1.page.scss'],
})
export class Tour1Page implements OnInit {
  username = '';
  phone = '';
  mail = '';
  from = '';
  to = '';

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {}

  async onSubmit() {
    if (this.username.trim().length < 5) {
      await this.showAlert("Your username cannot be empty and should contain a minimum length of 5!");
      return;
    }

    const phoneString = this.phone.toString();
    if (phoneString.length !== 10) {
      await this.showAlert("Contact number should be exactly 10 digits long!");
      return;
    }

    if (!this.mail.includes('@') || this.mail.length < 5) {
      await this.showAlert("Please enter a valid email address!");
      return;
    }

    const today = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    if (this.from < today) {
      await this.showAlert("The 'from' date should be today or in the future!");
      return;
    }

    if (this.to < this.from) {
      await this.showAlert("The 'to' date should be the same or later than the 'from' date!");
      return;
    }

    this.router.navigate(['/tabs/tab3']);
  }

  private async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Validation Error',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}

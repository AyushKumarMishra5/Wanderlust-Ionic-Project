import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tour',
    loadChildren: () => import('./tour/tour.module').then( m => m.TourPageModule)
  },
  {
    path: 'sedan',
    loadChildren: () => import('./sedan/sedan.module').then( m => m.SedanPageModule)
  },
  {
    path: 'tour-1',
    loadChildren: () => import('./tour-1/tour-1.module').then( m => m.Tour1PageModule)
  },
  {
    path: 'tour-2',
    loadChildren: () => import('./tour-2/tour-2.module').then( m => m.Tour2PageModule)
  },
  {
    path: 'sedan-2',
    loadChildren: () => import('./sedan-2/sedan-2.module').then( m => m.Sedan2PageModule)
  },
  {
    path: 'hotel',
    loadChildren: () => import('./hotel/hotel.module').then( m => m.HotelPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'dp',
    loadChildren: () => import('./dp/dp.module').then( m => m.DpPageModule)
  },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then( m => m.BookPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then( m => m.WeatherPageModule)
  },
  {
    path: 'razorpay',
    loadChildren: () => import('./razorpay/razorpay.module').then( m => m.RazorpayPageModule)
  },
  {
    path: 'tour-slide',
    loadChildren: () => import('./tour-slide/tour-slide.module').then( m => m.TourSlidePageModule)
  },
  {
    path: 'flight',
    loadChildren: () => import('./flight/flight.module').then( m => m.FlightPageModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./transaction/transaction.module').then( m => m.TransactionPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'sedan-slide',
    loadChildren: () => import('./sedan-slide/sedan-slide.module').then( m => m.SedanSlidePageModule)
  },
  {
    path: 'qr-payment',
    loadChildren: () => import('./qr-payment/qr-payment.module').then( m => m.QrPaymentPageModule)
  },
  {
    path: 'hotel-slide',
    loadChildren: () => import('./hotel-slide/hotel-slide.module').then( m => m.HotelSlidePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'carbook',
    loadChildren: () => import('./carbook/carbook.module').then( m => m.CarbookPageModule)
  },
  {
    path: 'trans',
    loadChildren: () => import('./trans/trans.module').then( m => m.TransPageModule)
  },
  {
    path: 'trip',
    loadChildren: () => import('./trip/trip.module').then( m => m.TripPageModule)
  },
  {
    path: 'cbook',
    loadChildren: () => import('./cbook/cbook.module').then( m => m.CbookPageModule)
  },
  {
    path: 'succ',
    loadChildren: () => import('./succ/succ.module').then( m => m.SuccPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

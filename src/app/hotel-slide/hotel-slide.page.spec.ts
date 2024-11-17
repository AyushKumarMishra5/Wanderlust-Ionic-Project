import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HotelSlidePage } from './hotel-slide.page';

describe('HotelSlidePage', () => {
  let component: HotelSlidePage;
  let fixture: ComponentFixture<HotelSlidePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

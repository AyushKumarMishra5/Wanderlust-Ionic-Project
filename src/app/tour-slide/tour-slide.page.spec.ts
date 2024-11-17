import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TourSlidePage } from './tour-slide.page';

describe('TourSlidePage', () => {
  let component: TourSlidePage;
  let fixture: ComponentFixture<TourSlidePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TourSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

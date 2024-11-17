import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SedanSlidePage } from './sedan-slide.page';

describe('SedanSlidePage', () => {
  let component: SedanSlidePage;
  let fixture: ComponentFixture<SedanSlidePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SedanSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

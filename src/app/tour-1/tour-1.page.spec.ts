import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tour1Page } from './tour-1.page';

describe('Tour1Page', () => {
  let component: Tour1Page;
  let fixture: ComponentFixture<Tour1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tour1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

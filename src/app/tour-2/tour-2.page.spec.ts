import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tour2Page } from './tour-2.page';

describe('Tour2Page', () => {
  let component: Tour2Page;
  let fixture: ComponentFixture<Tour2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tour2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

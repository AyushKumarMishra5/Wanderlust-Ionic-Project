import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SedanPage } from './sedan.page';

describe('SedanPage', () => {
  let component: SedanPage;
  let fixture: ComponentFixture<SedanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SedanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

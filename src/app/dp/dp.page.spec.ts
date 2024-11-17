import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DpPage } from './dp.page';

describe('DpPage', () => {
  let component: DpPage;
  let fixture: ComponentFixture<DpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarbookPage } from './carbook.page';

describe('CarbookPage', () => {
  let component: CarbookPage;
  let fixture: ComponentFixture<CarbookPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

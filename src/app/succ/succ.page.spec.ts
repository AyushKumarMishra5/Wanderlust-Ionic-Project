import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccPage } from './succ.page';

describe('SuccPage', () => {
  let component: SuccPage;
  let fixture: ComponentFixture<SuccPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

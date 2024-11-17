import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sedan2Page } from './sedan-2.page';

describe('Sedan2Page', () => {
  let component: Sedan2Page;
  let fixture: ComponentFixture<Sedan2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Sedan2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

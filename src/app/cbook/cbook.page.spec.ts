import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CbookPage } from './cbook.page';

describe('CbookPage', () => {
  let component: CbookPage;
  let fixture: ComponentFixture<CbookPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

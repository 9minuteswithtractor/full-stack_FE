import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsPageComponent } from './listing-page.component';

describe('ListingPageComponent', () => {
  let component: ListingsPageComponent;
  let fixture: ComponentFixture<ListingsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingsPageComponent],
    });
    fixture = TestBed.createComponent(ListingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

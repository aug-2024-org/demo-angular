import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHomeHttpComponent } from './book-home-http.component';

describe('BookHomeComponent', () => {
  let component: BookHomeHttpComponent;
  let fixture: ComponentFixture<BookHomeHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookHomeHttpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookHomeHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoChildAddComponent } from './todo-child-add.component';

describe('TodoChildAddComponent', () => {
  let component: TodoChildAddComponent;
  let fixture: ComponentFixture<TodoChildAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoChildAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoChildAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

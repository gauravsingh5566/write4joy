import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookShelfComponent } from './my-book-shelf.component';

describe('MyBookShelfComponent', () => {
  let component: MyBookShelfComponent;
  let fixture: ComponentFixture<MyBookShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBookShelfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBookShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

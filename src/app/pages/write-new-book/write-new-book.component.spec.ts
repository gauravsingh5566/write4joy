import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteNewBookComponent } from './write-new-book.component';

describe('WriteNewBookComponent', () => {
  let component: WriteNewBookComponent;
  let fixture: ComponentFixture<WriteNewBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteNewBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteNewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

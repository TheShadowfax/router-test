import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyOneSubComponent } from './lazy-one-sub.component';

describe('LazyOneSubComponent', () => {
  let component: LazyOneSubComponent;
  let fixture: ComponentFixture<LazyOneSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyOneSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyOneSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyOneComponent } from './lazy-one.component';

describe('LazyOneComponent', () => {
  let component: LazyOneComponent;
  let fixture: ComponentFixture<LazyOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComppComponent } from './compp.component';

describe('ComppComponent', () => {
  let component: ComppComponent;
  let fixture: ComponentFixture<ComppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

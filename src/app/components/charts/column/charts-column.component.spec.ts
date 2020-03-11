import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsColumnComponent } from './charts-column.component';

describe('ChartsComponent', () => {
  let component: ChartsColumnComponent;
  let fixture: ComponentFixture<ChartsColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsColumnComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

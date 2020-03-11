import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsCategoryComponent } from './tabs-category.component';

describe('TabsCategoryComponent', () => {
  let component: TabsCategoryComponent;
  let fixture: ComponentFixture<TabsCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

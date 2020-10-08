import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HauptbildschirmComponent } from './hauptbildschirm.component';

describe('HauptbildschirmComponent', () => {
  let component: HauptbildschirmComponent;
  let fixture: ComponentFixture<HauptbildschirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HauptbildschirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HauptbildschirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

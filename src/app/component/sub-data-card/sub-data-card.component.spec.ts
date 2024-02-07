import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDataCardComponent } from './sub-data-card.component';

describe('SubDataCardComponent', () => {
  let component: SubDataCardComponent;
  let fixture: ComponentFixture<SubDataCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubDataCardComponent]
    });
    fixture = TestBed.createComponent(SubDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

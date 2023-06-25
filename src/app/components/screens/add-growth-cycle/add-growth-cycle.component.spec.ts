import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrowthCycleComponent } from './add-growth-cycle.component';

describe('AddGrowthCycleComponent', () => {
  let component: AddGrowthCycleComponent;
  let fixture: ComponentFixture<AddGrowthCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGrowthCycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGrowthCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

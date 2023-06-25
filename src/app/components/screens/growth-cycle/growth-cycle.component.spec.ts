import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthCycleComponent } from './growth-cycle.component';

describe('GrowthCycleComponent', () => {
  let component: GrowthCycleComponent;
  let fixture: ComponentFixture<GrowthCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowthCycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowthCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

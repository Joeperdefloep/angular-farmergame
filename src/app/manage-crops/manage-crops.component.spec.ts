import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCropsComponent } from './manage-crops.component';

describe('ManageCropsComponent', () => {
  let component: ManageCropsComponent;
  let fixture: ComponentFixture<ManageCropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeefilterComponent } from './employeefilter.component';

describe('EmployeefilterComponent', () => {
  let component: EmployeefilterComponent;
  let fixture: ComponentFixture<EmployeefilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeefilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolefilterComponent } from './rolefilter.component';

describe('RolefilterComponent', () => {
  let component: RolefilterComponent;
  let fixture: ComponentFixture<RolefilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolefilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

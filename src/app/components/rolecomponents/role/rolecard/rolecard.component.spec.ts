import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolecardComponent } from './rolecard.component';

describe('RolecardComponent', () => {
  let component: RolecardComponent;
  let fixture: ComponentFixture<RolecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolecardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

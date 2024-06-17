import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolemainComponent } from './rolemain.component';

describe('RolemainComponent', () => {
  let component: RolemainComponent;
  let fixture: ComponentFixture<RolemainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolemainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

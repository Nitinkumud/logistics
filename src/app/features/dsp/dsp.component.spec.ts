import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DspComponent } from './dsp.component';

describe('DspComponent', () => {
  let component: DspComponent;
  let fixture: ComponentFixture<DspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DspComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

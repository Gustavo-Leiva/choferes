import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesVehiculosComponent } from './informes-vehiculos.component';

describe('InformesVehiculosComponent', () => {
  let component: InformesVehiculosComponent;
  let fixture: ComponentFixture<InformesVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformesVehiculosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformesVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoferPaisComponent } from './chofer-pais.component';

describe('ChoferPaisComponent', () => {
  let component: ChoferPaisComponent;
  let fixture: ComponentFixture<ChoferPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoferPaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoferPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

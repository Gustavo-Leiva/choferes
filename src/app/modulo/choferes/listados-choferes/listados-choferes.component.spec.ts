import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadosChoferesComponent } from './listados-choferes.component';

describe('ListadosChoferesComponent', () => {
  let component: ListadosChoferesComponent;
  let fixture: ComponentFixture<ListadosChoferesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadosChoferesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadosChoferesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

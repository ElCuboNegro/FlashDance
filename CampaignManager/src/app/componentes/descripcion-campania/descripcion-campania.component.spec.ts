import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionCampaniaComponent } from './descripcion-campania.component';

describe('DescripcionCampaniaComponent', () => {
  let component: DescripcionCampaniaComponent;
  let fixture: ComponentFixture<DescripcionCampaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionCampaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionCampaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

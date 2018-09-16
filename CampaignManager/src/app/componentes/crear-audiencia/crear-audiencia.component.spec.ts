import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAudienciaComponent } from './crear-audiencia.component';

describe('CrearAudienciaComponent', () => {
  let component: CrearAudienciaComponent;
  let fixture: ComponentFixture<CrearAudienciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearAudienciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAudienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

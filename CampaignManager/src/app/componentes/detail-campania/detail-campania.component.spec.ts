import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCampaniaComponent } from './detail-campania.component';

describe('DetailCampaniaComponent', () => {
  let component: DetailCampaniaComponent;
  let fixture: ComponentFixture<DetailCampaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCampaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCampaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

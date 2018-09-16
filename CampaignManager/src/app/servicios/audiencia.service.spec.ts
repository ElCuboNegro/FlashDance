import { TestBed, inject } from '@angular/core/testing';

import { AudienciaService } from './audiencia.service';

describe('AudienciaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AudienciaService]
    });
  });

  it('should be created', inject([AudienciaService], (service: AudienciaService) => {
    expect(service).toBeTruthy();
  }));
});

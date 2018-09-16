import { TestBed, inject } from '@angular/core/testing';

import { CampaniasService } from './campanias.service';

describe('CampaniasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaniasService]
    });
  });

  it('should be created', inject([CampaniasService], (service: CampaniasService) => {
    expect(service).toBeTruthy();
  }));
});

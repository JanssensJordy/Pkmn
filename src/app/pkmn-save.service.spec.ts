import { TestBed } from '@angular/core/testing';

import { PkmnSaveService } from './pkmn-save.service';

describe('PkmnSaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PkmnSaveService = TestBed.get(PkmnSaveService);
    expect(service).toBeTruthy();
  });
});

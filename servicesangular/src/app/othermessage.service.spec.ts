import { TestBed } from '@angular/core/testing';

import { OthermessageService } from './othermessage.service';

describe('OthermessageService', () => {
  let service: OthermessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OthermessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

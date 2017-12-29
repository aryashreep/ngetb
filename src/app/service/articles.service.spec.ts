import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ArticlesService } from './articles.service';

describe('ArticlesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
	  imports: [HttpModule],
      providers: [ArticlesService]
    });
  });

  it('should be created', inject([ArticlesService], (service: ArticlesService) => {
    expect(service).toBeTruthy();
  }));
});

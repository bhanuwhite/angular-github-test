import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GeneralService } from './service/general.service';
import { APIConstant } from './shared/constant';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  let service: GeneralService;
  let httpMock: HttpTestingController;
  /** testing for http client testing */
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GeneralService]
    });

    service = TestBed.get(GeneralService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  /** Checking for get request */
  describe('#checking for fetching repo details', () => {
    it('should return an Observable<repoList[]>', () => {
      const repoList = [{
        "id": 14098069,
        "name": "free-programming-books-zh_CN",
        "score": 3.0586283
      }, {
        "id": 24195339,
        "name": "angular",
        "score": 11.19668
      }
      ];
      /** creating api call to test the repo list  */
      service.get(APIConstant.url).subscribe(resp => {
        expect(resp['items'].length).toBe(30);
        let data = [{
          id: resp['items'][0].id,
          name: resp['items'][0].name,
          score: resp['items'][0].score
        },
        {
          id: resp['items'][1].id,
          name: resp['items'][1].name,
          score: resp['items'][1].score
        }]
        expect(data).toEqual(repoList);
      });

      const req = httpMock.expectOne(APIConstant.url);
      expect(req.request.method).toBe("GET");
      req.flush(repoList);
    });
  });
});

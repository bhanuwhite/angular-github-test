import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GeneralService } from './general.service';
import mockData from './mock.data.json';
import { APIConstant } from '../shared/constant'

describe('GeneralService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [GeneralService],
    imports: [HttpClientTestingModule]
  }));

  describe(":", () => {
    function setup() {
      const generalService = TestBed.get(GeneralService);
      const httpTestingController = TestBed.get(HttpTestingController);
      return { generalService, httpTestingController };
    }

    it('it should return the total repo from github', () => {
      const { generalService, httpTestingController } = setup();
      generalService.get(APIConstant.url).subscribe(data => {
        expect(data.data).toEqual(mockData);
        expect(data.data.total_count).toBe(1625)
      })
      let req = httpTestingController.expectOne(APIConstant.url);

      expect(req.request.method).toBe('GET');
      req.flush({ data: mockData });

    })
    afterEach(() => {
      const { httpTestingController } = setup();
      httpTestingController.verify();
    });
  })
});



import { CarsearchService } from './carsearch.service';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';






describe('CarService', () => {
    let service: CarsearchService;
    let http  : HttpClient;
    let httpControler : HttpTestingController;
    let searchInitUrl = "https://car-loyalty.qa.cnxloyalty.com/car/v1.0/search/init";
    let searchStatusUrl = "https://car-loyalty.qa.cnxloyalty.com/car/v1.0/search/status";
    let searchResultUrl = "https://car-loyalty.qa.cnxloyalty.com/car/v1.0/search/results";
  
    let searchInitResponseExpected : any = {
      "sessionId" : ""
    };
  
    let searchStatusResponseExpected : any = {
      "status" : "",
      "resultsCount" : "",
      "errors":[]
    };
  
    let searchResultResponseExpected : any = {
      "carRentals" : []
    };
  
    
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ],
        providers : [CarsearchService]
      });
      service = TestBed.inject(CarsearchService);                //creating instance
      //creating mocks
      http = TestBed.inject(HttpClient);
      httpControler = TestBed.inject(HttpTestingController);
    });
  
    afterEach(()=>{
      httpControler.verify();
    })
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  
    it('should send a post request calling Car search init api',()=>{
      let searchInitResponseReceived : any = {};
      service.searchinit().subscribe((data:any)=>{
        searchInitResponseReceived = data;
      });
      //creating mock request
      let req = httpControler.expectOne({
        method : "POST",
        url : searchInitUrl
      })
  
      req.flush(searchInitResponseExpected);
      expect(req.request.method).toBe("POST");
    })
  
    it('should receive a valid response calling Car search init api',()=>{
      let searchInitResponseReceived : any = {};
      service.searchinit().subscribe((data:any)=>{
        expect(data.hasOwnProperty('sessionId')).toBe(true);
      });
      //creating mock request
      let req = httpControler.expectOne({
        method : "POST",
        url : searchInitUrl
      })
  
      //after this only subscribe part is executed
      req.flush(searchInitResponseExpected);
    })
  
    it('should send a post request calling Car search status api',()=>{
      let searchStatusResponseReceived : any = {};
      service.searchstatus().subscribe((data:any)=>{
        searchStatusResponseExpected = data;
      });
      //creating mock request
      let req = httpControler.expectOne({
        method : "POST",
        url : searchStatusUrl
      })
  
      req.flush(searchStatusResponseExpected);
      expect(req.request.method).toBe("POST");
    })
  
    it('should receive a valid response calling Car search status api',()=>{
      service.searchstatus().subscribe((data:any)=>{
        expect(data.hasOwnProperty('status')).toBe(true);
        expect(data.hasOwnProperty('resultsCount')).toBe(true);
      });
      //creating mock request
      let req = httpControler.expectOne({
        method : "POST",
        url : searchStatusUrl
      })
      //after this only subscribe part is executed
      req.flush(searchStatusResponseExpected);
    });
  
    it('should send a post request calling Car search result api',()=>{
      let searchStatusResponseReceived : any = {};
      service.searchresult().subscribe((data:any)=>{
        searchResultResponseExpected = data;
      });
      //creating mock request
      let req = httpControler.expectOne({
        method : "POST",
        url : searchResultUrl
      })
      req.flush(searchResultResponseExpected);
      expect(req.request.method).toBe("POST");
    });
  
    it('should receive a valid response calling Car search result api',()=>{
      let searchInitResponseReceived : any = {};
      service.searchresult().subscribe((data:any)=>{
        expect(data.hasOwnProperty('carRentals')).toBe(true);
      });
      //creating mock request
      let req = httpControler.expectOne({
        method : "POST",
        url : searchResultUrl
      })
  
      //after this only subscribe part is executed
      req.flush(searchResultResponseExpected);
    });
  
  
  
    
  
  
  
  
  
  
  });
  
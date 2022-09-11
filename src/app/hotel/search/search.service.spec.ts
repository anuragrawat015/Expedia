import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from 'src/app/activity/search/search.component';

import { SearchService } from './search.service';


describe('HotelService', () => {
    let service: SearchService;
    let http  : HttpClient;
    let httpControler : HttpTestingController;
    let searchInitUrl = "https://hotel-loyalty.stage.cnxloyalty.com/hotel/v1.0/search/init";
    let searchStatusUrl = "https://hotel-loyalty.stage.cnxloyalty.com/hotel/v1.0/search/status";
    let searchResultUrl = "https://hotel-loyalty.stage.cnxloyalty.com/hotel/v1.0/search/results";
  
    let searchInitResponseExpected : any = {
      "sessionId" : ""
    };
  
    let searchStatusResponseExpected : any = {
      "status" : "",
      "resultCount" : ""
    };
  
    let searchResultResponseExpected : any = {
      "hotels" : []
    };
  
    
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ],
        providers : [SearchService]
      });
      service = TestBed.inject(SearchService);                //creating instance
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
  
    it('should send a post request calling hotel search init api',()=>{
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
  
    it('should receive a valid response calling hotel search init api',()=>{
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
  
    it('should send a post request calling hotel search status api',()=>{
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
  
    it('should receive a valid response calling hotel search status api',()=>{
      service.searchstatus().subscribe((data:any)=>{
        expect(data.hasOwnProperty('status')).toBe(true);
        expect(data.hasOwnProperty('resultCount')).toBe(true);
      });
      //creating mock request
      let req = httpControler.expectOne({
        method : "POST",
        url : searchStatusUrl
      })
      //after this only subscribe part is executed
      req.flush(searchStatusResponseExpected);
    });
  
    it('should send a post request calling hotel search result api',()=>{
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
  
    it('should receive a valid response calling hotel search result api',()=>{
      let searchInitResponseReceived : any = {};
      service.searchresult().subscribe((data:any)=>{
        expect(data.hasOwnProperty('hotels')).toBe(true);
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
  
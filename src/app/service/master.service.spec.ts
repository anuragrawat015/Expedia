import { TestBed } from '@angular/core/testing';


import { HttpClientTestingModule , HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { MasterService } from './master.service';


describe('MasterService', () => {
  let service: MasterService;
  let http  : HttpClient;
  let httpControler : HttpTestingController;
  let apiurl="https://autosuggest-orxe-service.qa.cnxloyalty.com/api/autosuggest/v1.0/search"


  
  let searchResultResponseExpected : any = {
    "s" : [],
    "wrn":[]
  };

  let sampleSearchInitBody : any = {
    "sq": {
        "st": "las",
        "sf": [
            "airport",
            "city"
        ]
    },
    "sel": true,
    "rec": 20,
    "c": "cars"
}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers : [MasterService]
    });
    service = TestBed.inject(MasterService);                //creating instance
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

  it('should send a post request calling autosuggestapi',()=>{
    let searchInitResponseReceived : any = {};
    service.hello(sampleSearchInitBody).subscribe((data:any)=>{
      searchInitResponseReceived = data;
    });
    //creating mock request
    let req = httpControler.expectOne({
      method : "POST",
      url :apiurl
    })

    req.flush(searchResultResponseExpected);
    expect(req.request.method).toBe("POST");
  })

  it('should receive a valid response calling autosuggestapi',()=>{
    let searchInitResponseReceived : any = {};
    service.hello(searchResultResponseExpected).subscribe((data:any)=>{
      expect(data.hasOwnProperty('s')).toBe(true);
      expect(data.hasOwnProperty('wrn')).toBe(true);
    });
    //creating mock request
    let req = httpControler.expectOne({
      method : "POST",
      url : apiurl
    })

    //after this only subscribe part is executed
    req.flush(searchResultResponseExpected);
  })

  


  






});

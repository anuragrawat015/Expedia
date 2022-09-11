

import { HomePageSearchCardComponent } from './home-page-search-card.component';



import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MasterService } from '../service/master.service';
// import { SearchService } from './search.service';
// import { CarcommonService } from '../Carcommon.service';

describe('HomePageCardComponent', () => {
  let HomePageCardComponent: HomePageSearchCardComponent;
  let fixture: ComponentFixture<HomePageSearchCardComponent>;
 //let service:jasmine.SpyObj<CarsearchService> = jasmine.createSpyObj("SearchService",["searchinit","searchstatus","searchresult"]);
 let service:jasmine.SpyObj<MasterService>


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageSearchCardComponent ],
      imports : [
          HttpClientTestingModule,
          ReactiveFormsModule,
          FormsModule],
      providers : [
        
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageSearchCardComponent);
    HomePageCardComponent = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(HomePageCardComponent).toBeTruthy();
  });

  
  it('should set val',() =>{
  
    let date = "2022-02-10";
    fixture.detectChanges;
    HomePageCardComponent.setVal();
    expect(service.pickupDate).toBe(date);
    expect(service.dropupDate).toBe(date);
 });
 it('sholud set val1',() =>{
  
    let time = "10:30";
    fixture.detectChanges;
    HomePageCardComponent.setVal1();
    expect(service.pickupTime).toBe(time);
    expect(service.dropupTime).toBe(time);
 });
 it('should choose location',() =>{
  
    let data={'id':0}
    fixture.detectChanges;
    HomePageCardComponent.chooseLocation(data,"pickup");
    expect(HomePageCardComponent.pickup_locations_loaded).toBe(false);
     expect(HomePageCardComponent.selected_drop_locationId).toBe(data.id);
     expect(HomePageCardComponent.pickup_location_input).toBe("")
    //  expect(service.location_lat).toBe(1.1)
    // expect(service.location_lng).toBe(1.1)
    // expect(HomePageCardComponent.drop_locations_loaded).toBe(false)
    // expect(HomePageCardComponent.pickup_locations_loaded).toBe(false)
    // expect(HomePageCardComponent.selected_drop_locationId).toBe("")
    // expect(HomePageCardComponent.pickup_location_input).toBe("")
    // expect(HomePageCardComponent.drop_location_input).toBe("")
    // expect(service.location_lat).toBe(1.1)
    // expect(service.location_lng).toBe(1.1)
    // expect(service.drop_location_lat).toBe(1.1)
    // expect(service.drop_location_lng).toBe(1.1)
    // expect(service.pickupTime).toBe(date);
    // expect(service.dropupTime).toBe(date);
 });









  it('should call the search-init and save the response',() =>{
  
   let response:any ={}; 
   response = {
    "s": [
        {
            "n": "LAS - Las Vegas, NV",
            "d": "McCarran Int'l Airport",
            "c": "United States",
            "cc": "US",
            "cn": "Las Vegas",
            "nbcn": "Las Vegas",
            "t": "Airport",
            "lId": "110360833011516670",
            "lat": 36.083333333333336,
            "lng": -115.16666666666669,
            "cd": "LAS",
            "tzi": {
                "tz": "Pacific Standard Time",
                "dt": "10/09/2022 11:03:12"
            },
            "sl": [],
            "sc": "NV",
            "iaa": false,
            "nbc": {
                "ac": "",
                "n": "Las Vegas"
            }
        },
        {
            "n": "Las Vegas",
            "d": "NV",
            "c": "United States",
            "cc": "US",
            "cn": "Las Vegas",
            "nbcn": "Las Vegas",
            "t": "City",
            "lId": "010360833011516670",
            "lat": 36.0833333333333,
            "lng": -115.166666666667,
            "cd": "LAS",
            "tzi": {
                "tz": "Pacific Standard Time",
                "dt": "10/09/2022 11:03:12"
            },
            "sl": [],
            "sc": "NV",
            "iaa": false,
            "nbc": {}
        },
        {
            "n": "BLD - Las Vegas, NV",
            "d": "Boulder City Airport",
            "c": "United States",
            "cc": "US",
            "cn": "Las Vegas",
            "nbcn": "Las Vegas",
            "t": "Airport",
            "lId": "110359464011486110",
            "lat": 35.94638888888889,
            "lng": -114.86111111111111,
            "cd": "BLD",
            "tzi": {
                "tz": "Pacific Standard Time",
                "dt": "10/09/2022 11:03:12"
            },
            "sl": [],
            "sc": "NV",
            "iaa": false,
            "nbc": {
                "ac": "",
                "n": "Las Vegas"
            }
        },
        {
            "n": "Dallas, TX",
            "d": "All Airports - Dallas (DFW)",
            "c": "United States",
            "cc": "US",
            "cn": "Dallas",
            "nbcn": "Las Colinas",
            "t": "Airport",
            "lId": "610327667009678331",
            "lat": 32.766666666666666,
            "lng": -96.78333333333332,
            "cd": "DFW",
            "tzi": {
                "tz": "Central Standard Time",
                "dt": "10/09/2022 13:03:12"
            },
            "sl": [],
            "sc": "TX",
            "iaa": true,
            "nbc": {
                "ac": "",
                "n": "Las Colinas"
            }
        },
        {
            "n": "San Juan",
            "d": "All Airports - San Juan (SJU)",
            "c": "United States",
            "cc": "US",
            "cn": "San Juan",
            "nbcn": "Las Croabas",
            "t": "Airport",
            "lId": "610184500661",
            "lat": 18.45,
            "lng": -66.0,
            "cd": "SJU",
            "tzi": {
                "tz": "SA Western Standard Time",
                "dt": "10/09/2022 14:03:12"
            },
            "sl": [],
            "sc": "",
            "iaa": true,
            "nbc": {
                "ac": "",
                "n": "Las Croabas"
            }
        },
        {
            "n": "LaSalle",
            "d": "ON",
            "c": "Canada",
            "cc": "CA",
            "cn": "LaSalle",
            "nbcn": "LaSalle",
            "t": "City",
            "lId": "010422475008306510",
            "lat": 42.24749755859375,
            "lng": -83.06507110595703,
            "cd": "",
            "tzi": {
                "tz": "Eastern Standard Time",
                "dt": "10/09/2022 14:03:12"
            },
            "sl": [],
            "sc": "ON",
            "iaa": false,
            "nbc": {}
        },
        {
            "n": "Lashburn",
            "d": "SK",
            "c": "Canada",
            "cc": "CA",
            "cn": "Lashburn",
            "nbcn": "Lashburn",
            "t": "City",
            "lId": "010531265010961480",
            "lat": 53.126529693603516,
            "lng": -109.61481475830078,
            "cd": "",
            "tzi": {
                "tz": "Mountain Standard Time",
                "dt": "10/09/2022 12:03:12"
            },
            "sl": [],
            "sc": "SK",
            "iaa": false,
            "nbc": {}
        },
        {
            "n": "Lasqueti Island",
            "d": "BC",
            "c": "Canada",
            "cc": "CA",
            "cn": "Lasqueti Island",
            "nbcn": "Lasqueti Island",
            "t": "City",
            "lId": "010494785012427270",
            "lat": 49.478538513183594,
            "lng": -124.2726821899414,
            "cd": "",
            "tzi": {
                "tz": "Pacific Standard Time",
                "dt": "10/09/2022 11:03:12"
            },
            "sl": [],
            "sc": "BC",
            "iaa": false,
            "nbc": {}
        },
        {
            "n": "ELP - El Paso, TX",
            "d": "El Paso Int'l Airport",
            "c": "United States",
            "cc": "US",
            "cn": "El Paso",
            "nbcn": "Las Cruces",
            "t": "Airport",
            "lId": "610318010638330",
            "lat": 31.8,
            "lng": -106.38333333333334,
            "cd": "ELP",
            "tzi": {
                "tz": "Mountain Standard Time",
                "dt": "10/09/2022 12:03:12"
            },
            "sl": [],
            "sc": "TX",
            "iaa": false,
            "nbc": {
                "ac": "",
                "n": "Las Cruces"
            }
        },
        {
            "n": "Las Cruces",
            "d": "NM",
            "c": "United States",
            "cc": "US",
            "cn": "Las Cruces",
            "nbcn": "Las Cruces",
            "t": "City",
            "lId": "010323207010677190",
            "lat": 32.32071,
            "lng": -106.7719,
            "cd": "LRU",
            "tzi": {
                "tz": "Mountain Standard Time",
                "dt": "10/09/2022 12:03:12"
            },
            "sl": [],
            "sc": "NM",
            "iaa": false,
            "nbc": {}
        }
    ],
    "wrn": []
}
  let data={
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
  service.hello.and.callFake((data)=>{
   return of(response);
  });
  
  spyOn(HomePageCardComponent, 'getAns'); 
  HomePageCardComponent.getAns("","");
  fixture.detectChanges();
    expect(HomePageCardComponent.getAns).toBe(response);
   // expect(parentservice.globalsessionid).toBe(response.sessionId)
  });
}
)



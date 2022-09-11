

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
 let service:MasterService


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
    service = TestBed.inject(MasterService); 
    fixture = TestBed.createComponent(HomePageSearchCardComponent);
    HomePageCardComponent = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(HomePageCardComponent).toBeTruthy();
  });

  
  it('should set val',() =>{
  
    let date = "";
    
    HomePageCardComponent.setVal();
    fixture.detectChanges;
    expect(HomePageCardComponent.pickupDate).toBe(date);
    expect(HomePageCardComponent.dropupDate).toBe(date);
 });
 it('sholud set val1',() =>{
  
    let time = "";
    
    HomePageCardComponent.setVal1();
    fixture.detectChanges;
    expect(service.pickupTime).toBe(time);
    expect(service.dropupTime).toBe(time);
 });
 it('should choose location',() =>{
    let lat=20.23
    let long=20.23
    let data={'id':0}
    
    HomePageCardComponent.chooseLocation(data,"pickup");
    fixture.detectChanges;
    expect(HomePageCardComponent.pickup_locations_loaded).toBe(false);
     expect(HomePageCardComponent.selected_drop_locationId).toBe(data.id);
     expect(HomePageCardComponent.pickup_location_input).toBe("")
     expect(service.location_lat).toBe(lat)
     expect(service.location_lng).toBe(long)
    
 });
 it('should choose location',() =>{
  
    let data={'id':0}
    fixture.detectChanges;
    HomePageCardComponent.chooseLocation(data,"drop");
    expect(HomePageCardComponent.drop_locations_loaded).toBe(false);
     expect(HomePageCardComponent.selected_drop_locationId).toBe(data.id);
     expect(HomePageCardComponent.drop_location_input).toBe("")
    
 });



 it('should call the hotel search-init and send valid response',()=>{
    

    let response : any = {};
    response = {
      "sessionId": "723c3073-e233-4462-b626-2d38a4d90ba6-HLNXT$1371"
    }

    // service.hello.and.callFake(()=>{
    //    return of(response);
    // })
    let data3={
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
    service.hello(data3).subscribe((data:any)=>{
        
      });
    
    let data={"target":{"value":"abcde"}}
    let data1="drop"
    let data2:any
    HomePageCardComponent.getAns(data,data1);
    fixture.detectChanges();
    expect(HomePageCardComponent.data).toBe(data2)
    expect(HomePageCardComponent.drop_locations_loaded).toBe(false)

    // expect(.responseSearchInit).toEqual(response);
  });
  it('should call the hotel search-init and send valid response',()=>{
    

    let response : any = {};
    response = {
      "sessionId": "723c3073-e233-4462-b626-2d38a4d90ba6-HLNXT$1371"
    }

    // service.hello.and.callFake(()=>{
    //    return of(response);
    // })
    
    let data={"target":{"value":"abcde"}}
    let data1="pickup"
    let data2:any
    HomePageCardComponent.getAns(data,data1);
    fixture.detectChanges();
    expect(HomePageCardComponent.data).toBe(data2)
    expect(HomePageCardComponent.pickup_locations_loaded).toBe(false)

    // expect(.responseSearchInit).toEqual(response);
  });





}
)



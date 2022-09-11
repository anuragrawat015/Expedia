



import { ComponentFixture, TestBed , fakeAsync ,  tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {  SearchComponentHotel } from './search.component';
import { of } from 'rxjs';
import { SearchService } from './search.service';


describe('hotelSearchComponent', () => {
  let component: SearchComponentHotel;
  let fixture: ComponentFixture<SearchComponentHotel>;
  let hotelService : jasmine.SpyObj<SearchService> = jasmine.createSpyObj("hotelService",["searchinit","searchstatus","searchresult"]);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      declarations: [ SearchService ],
      providers : [
        {
          provide : SearchService,
          useValue : hotelService
        }
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SearchComponentHotel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the hotel search-init and send valid response',()=>{
    

    let response : any = {};
    response = {
      "sessionId": "723c3073-e233-4462-b626-2d38a4d90ba6-HLNXT$1371"
    }

    hotelService.searchinit.and.callFake(()=>{
       return of(response);
    })
   
    spyOn(component,'searchstatus');
    component.searchinit();
    fixture.detectChanges();
    expect(component.responseSearchInit).toEqual(response);
  });

  it('should call the hotel search status and check if status is completed',()=>{
    

    let response = {
      "status": "Completed",
      "resultCount": 0,
      "errors" : []
    }

    hotelService.searchstatus.and.callFake(()=>{
      return of(response);
    })
    spyOn(component,"searchresult");
    component.searchstatus();
    fixture.detectChanges();
    expect(response.status).toBe("Completed");
  });

  it('should call hotel search result function and get a valid response',()=>{
    

    let response = {
      "sessionId" : "",
      "hotels" : []
    }

    hotelService.searchresult.and.callFake(()=>{
      return of(response);
    })
    component.searchresult();
    fixture.detectChanges();
    expect(response.sessionId).toBe("");
  })

});












// import { SearchComponent } from './search.component';
// import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { of } from 'rxjs'

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { hotelSearchService } from './hotel-search.service';
// import { CommonService } from '../common.service';


// describe('hotelTabComponent', () => {
//   let hotelTabComponent: SearchComponent;
//   let fixture: ComponentFixture<SearchComponent>;
//  let service:jasmine.SpyObj<hotelSearchService> = jasmine.createSpyObj("SearchService",["searchinit","searchstatus","searchresult"]);
//  let parentservice:jasmine.SpyObj<CommonService>


//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ SearchComponent ],
//       imports : [
//           HttpClientTestingModule,
//           ReactiveFormsModule,
//           FormsModule],
//       providers : [
//         hotelSearchService
//       ]
//     })
//     .compileComponents();
    
//     fixture = TestBed.createComponent(SearchComponent);
//     hotelTabComponent = fixture.componentInstance;
//     fixture.detectChanges();
//   });



//   it('should create', () => {
//     expect(hotelTabComponent).toBeTruthy();
//   });

//   it('should call the search-init and save the response',() =>{
  
//    let response:any ={}; 
//    response = {
//     "sessionId": "723c3073-e233-4462-b626-2d38a4d90ba6-HLNXT$1371"
//     };

//   service.searchinit.and.callFake(()=>{
//    return of(response);
//   });

//   spyOn(hotelTabComponent, 'searchstatus'); 
//   hotelTabComponent.searchinit();
//   fixture.detectChanges();
//     expect(hotelTabComponent.searchinit).toBe(response);
//   });
  


//   it('sholud call the search-status function and check if status completed',() =>{

    

//    let response = {
//         "status": "Completed",
//         "resultCount": 53,
//         "errors": []
//     }

  
   
//    service.searchstatus.and.callFake(()=>{
//      return of(response);
//    });
   
//    spyOn(hotelTabComponent,'searchresult');
//    hotelTabComponent.searchstatus();
//    fixture.detectChanges();
//    expect(response.status).toBe("Completed");
//   });


  
//   it('should call the search-result function and get the result-array',()=>{
   

//    let response = {
//     "sessionId": "c364e0e9-3fef-4301-bd48-d8f987c9f6ce-ACNXT$1371",
//     "activities": [
//         {
//             "id": "110804P56",
//             "name": "Avalon City: A Self-Guided Audio Tour",
//             "supplierId": "36cj0ou718g",
//             "categories": [
//                 {
//                     "id": "16",
//                     "name": "Outdoor Activities"
//                 }
//             ],
//             "content": {
//                 "media": {
//                     "primaryImage": {
//                         "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/2a/69/38.jpg",
//                         "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/2a/69/38.jpg",
//                         "caption": "Avalon City: A Self-Guided Audio Tour"
//                     },
//                     "images": []
//                 },
//                 "location": {
//                     "address": {
//                         "state": {
//                             "name": "California"
//                         },
//                         "countryCode": "US",
//                         "city": {
//                             "name": "Catalina Island"
//                         }
//                     },
//                     "geoCode": {
//                         "lat": 33.38789,
//                         "long": -118.41631
//                     }
//                 },
//                 "summary": "Take a self-guided GPS audio tour through the streets of Avalon with me. My name is Matthew and I am one of the 4000 residents of Avalon. Being a local I get asked a lot of questions. Do you live here full time? How expensive is it? What is that large house up on the hill? Why does everyone drive around in golf carts? How can you have a casino that doesn't allow gambling?<br><br>Along with historians, authors, and other passionate locals, we will walk the streets of Avalon to answer these questions and more. You'll learn the stories behind our town and its famous landmarks from the people who live here.<br><br>The tour is ready whenever you are and the audio plays automatically at exactly the right time and place using your smartphone's GPS and the VoiceMap mobile app, which also works offline.<br>",
//                 "duration": "50 minutes",
//                 "notes": [],
//                 "inclusions": [],
//                 "exclusions": [],
//                 "displayInfos": [],
//                 "policies": [],
//                 "reviews": [],
//                 "ratingsCount": [],
//                 "reviewCount": 8,
//                 "rating": 4.0,
//                 "maxPassengerCount": 0,
//                 "offers": []
//             },
//             "bookingQuestions": [],
//             "fareType": "Negotiated",
//             "displayFare": {
//                 "currency": "USD",
//                 "totalFareStartsFrom": 44.54,
//                 "breakUp": {
//                     "baseFareStartsFrom": 4.26,
//                     "taxes": [],
//                     "fees": [],
//                     "discounts": [],
//                     "markups": [
//                         {
//                             "source": "Agency",
//                             "desc": "Agency",
//                             "amount": 30.0
//                         },
//                         {
//                             "source": "Agency",
//                             "desc": "Partner Markup",
//                             "amount": 10.28
//                         }
//                     ]
//                 },
//                 "isRefundable": false
//             }
//         },
//         {
//             "id": "104204P430",
//             "name": "Long Beach Bar Hunt: Long Beach Boss Bar Crawl",
//             "supplierId": "36cj0ou718g",
//             "categories": [
//                 {
//                     "id": "12",
//                     "name": "Tours & Sightseeing"
//                 }
//             ],
//             "content": {
//                 "media": {
//                     "primaryImage": {
//                         "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/26/69/ed.jpg",
//                         "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0b/26/69/ed.jpg",
//                         "caption": "Long Beach Bar Hunt: Long Beach Boss Bar Crawl"
//                     },
//                     "images": []
//                 },
//                 "location": {
//                     "address": {
//                         "state": {
//                             "name": "California"
//                         },
//                         "countryCode": "US",
//                         "city": {
//                             "name": "Long Beach",
//                             "code": "LGB"
//                         }
//                     },
//                     "geoCode": {
//                         "lat": 33.7683,
//                         "long": -118.1956
//                     }
//                 },
//                 "summary": "Let’s Roam is the #1 app-led scavenger hunt company. Walk to all the best landmarks and hidden gems, answering trivia questions and solving challenges. Work with your team or compete against them, as you learn new facts and create memorable experiences. Let’s Roam Scavenger Hunts are great as an everyday hotel, or for bachelorette parties, birthday parties, corporate team building events and more! Each player chooses an interactive role, with challenges varying by person.",
//                 "duration": "2 hours",
//                 "notes": [],
//                 "inclusions": [],
//                 "exclusions": [],
//                 "displayInfos": [],
//                 "policies": [],
//                 "reviews": [],
//                 "ratingsCount": [],
//                 "reviewCount": 0,
//                 "rating": 0.0,
//                 "maxPassengerCount": 0,
//                 "offers": []
//             },
//             "bookingQuestions": [],
//             "fareType": "Negotiated",
//             "displayFare": {
//                 "currency": "USD",
//                 "totalFareStartsFrom": 52.29,
//                 "breakUp": {
//                     "baseFareStartsFrom": 10.22,
//                     "taxes": [],
//                     "fees": [],
//                     "discounts": [],
//                     "markups": [
//                         {
//                             "source": "Agency",
//                             "desc": "Agency",
//                             "amount": 30.0
//                         },
//                         {
//                             "source": "Agency",
//                             "desc": "Partner Markup",
//                             "amount": 12.07
//                         }
//                     ]
//                 },
//                 "isRefundable": false
//             }
//         },
//         {
//             "id": "104204P108",
//             "name": "Long Beach Scavenger Hunt: Long Beach Art & Architecture",
//             "supplierId": "36cj0ou718g",
//             "categories": [
//                 {
//                     "id": "12",
//                     "name": "Tours & Sightseeing"
//                 }
//             ],
//             "content": {
//                 "media": {
//                     "primaryImage": {
//                         "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/26/68/d8.jpg",
//                         "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0b/26/68/d8.jpg",
//                         "caption": "Long Beach Scavenger Hunt: Long Beach Art & Architecture"
//                     },
//                     "images": []
//                 },
//                 "location": {
//                     "address": {
//                         "state": {
//                             "name": "California"
//                         },
//                         "countryCode": "US",
//                         "city": {
//                             "name": "Long Beach",
//                             "code": "LGB"
//                         }
//                     },
//                     "geoCode": {
//                         "lat": 33.7683,
//                         "long": -118.1956
//                     }
//                 },
//                 "summary": "Let’s Roam is the #1 app-led scavenger hunt company. Walk to all the best landmarks and hidden gems, answering trivia questions and solving challenges. Work with your team or compete against them, as you learn new facts and create memorable experiences. Let’s Roam Scavenger Hunts are great as an everyday hotel, or for bachelorette parties, birthday parties, corporate team building events and more! Each player chooses an interactive role, with challenges varying by person.",
//                 "duration": "2 hours",
//                 "notes": [],
//                 "inclusions": [],
//                 "exclusions": [],
//                 "displayInfos": [],
//                 "policies": [],
//                 "reviews": [],
//                 "ratingsCount": [],
//                 "reviewCount": 1,
//                 "rating": 5.0,
//                 "maxPassengerCount": 0,
//                 "offers": []
//             },
//             "bookingQuestions": [],
//             "fareType": "Negotiated",
//             "displayFare": {
//                 "currency": "USD",
//                 "totalFareStartsFrom": 52.29,
//                 "breakUp": {
//                     "baseFareStartsFrom": 10.22,
//                     "taxes": [],
//                     "fees": [],
//                     "discounts": [],
//                     "markups": [
//                         {
//                             "source": "Agency",
//                             "desc": "Agency",
//                             "amount": 30.0
//                         },
//                         {
//                             "source": "Agency",
//                             "desc": "Partner Markup",
//                             "amount": 12.07
//                         }
//                     ]
//                 },
//                 "isRefundable": false
//             }
//         },
//         {
//             "id": "30114P52",
//             "name": "Long Beach Self-Guided Audio Tour",
//             "supplierId": "36cj0ou718g",
//             "categories": [
//                 {
//                     "id": "16",
//                     "name": "Outdoor Activities"
//                 }
//             ],
//             "content": {
//                 "media": {
//                     "primaryImage": {
//                         "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/7b/2a/79.jpg",
//                         "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/06/7b/2a/79.jpg",
//                         "caption": "Long Beach Self-Guided Audio Tour"
//                     },
//                     "images": []
//                 },
//                 "location": {
//                     "address": {
//                         "state": {
//                             "name": "California"
//                         },
//                         "countryCode": "US",
//                         "city": {
//                             "name": "Long Beach",
//                             "code": "LGB"
//                         }
//                     },
//                     "geoCode": {
//                         "lat": 33.7683,
//                         "long": -118.1956
//                     }
//                 },
//                 "summary": "This fascinating audio tour of the beautiful sunny and vibrant Long Beach in California will take you on a fun journey where you will see sights such as the magnificent RMS Queen Mary and the famous Long Beach Grand Prix.<br><br>Perfectly suited for discovery on foot, our self-guided audio tour allows you to set the pace and explore at your leisure as you uncover the stories of this exciting city.<br><br>On this tour you will see wonderful examples of architecture, important historical vessels and lots of free artwork generated by the people who live and work in the area.<br><br>To discover this marvellous city in your own time and at your own pace just download this vibrantly-narrated self-guided audio tour, pop in your headphones, open the map that comes with your download and start walking.<br><br>The tour will take approximately two hours, but you can pause the audio guide when needed. Grab a bite to eat or do some shopping along the way.<br><br>Please note that this tour is only available in English.<br>",
//                 "duration": "2 to 3 hours",
//                 "notes": [],
//                 "inclusions": [],
//                 "exclusions": [],
//                 "displayInfos": [],
//                 "policies": [],
//                 "reviews": [],
//                 "ratingsCount": [],
//                 "reviewCount": 0,
//                 "rating": 0.0,
//                 "maxPassengerCount": 0,
//                 "offers": []
//             },
//             "bookingQuestions": [],
//             "fareType": "Negotiated",
//             "displayFare": {
//                 "currency": "USD",
//                 "totalFareStartsFrom": 55.50,
//                 "breakUp": {
//                     "baseFareStartsFrom": 12.69,
//                     "taxes": [],
//                     "fees": [],
//                     "discounts": [],
//                     "markups": [
//                         {
//                             "source": "Agency",
//                             "desc": "Agency",
//                             "amount": 30.0
//                         },
//                         {
//                             "source": "Agency",
//                             "desc": "Partner Markup",
//                             "amount": 12.81
//                         }
//                     ]
//                 },
//                 "isRefundable": false
//             }
//         },
//         {
//             "id": "200006P266",
//             "name": "Santa Ana Showdown Scavenger Hunt",
//             "supplierId": "36cj0ou718g",
//             "categories": [
//                 {
//                     "id": "12",
//                     "name": "Tours & Sightseeing"
//                 }
//             ],
//             "content": {
//                 "media": {
//                     "primaryImage": {
//                         "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0f/5c/f7/f1.jpg",
//                         "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0f/5c/f7/f1.jpg",
//                         "caption": "Santa Ana Showdown Scavenger Hunt"
//                     },
//                     "images": []
//                 },
//                 "location": {
//                     "address": {
//                         "state": {
//                             "name": "California"
//                         },
//                         "countryCode": "US",
//                         "city": {
//                             "name": "Long Beach",
//                             "code": "LGB"
//                         }
//                     },
//                     "geoCode": {
//                         "lat": 33.7683,
//                         "long": -118.1956
//                     }
//                 },
//                 "summary": "Our very unique, immersive adventures are the only ones of their kind. We, unlike other companies, provide your very own remote, interactive, live host to assist and encourage you along. We are an Austin, TX-based global custom event design company offering scavenger hunts and other events in 150 cities in North America and beyond! Our specially hand-crafted adventures are equal parts tour, creative challenge, detective hunt, and social experiment! <br><br>Guests get to discover in an alternate reality our favorite hidden gems off the beaten trail and creatively interpret fun art, history, and culture clues - for points! They get to enjoy fame and glory while appearing on our website’s international leaderboard, no matter what their score. They get to essentially race other teams in other cities, even if they don’t have competitors who have signed up in their city! Get ready to local authors, experience the favorite hangouts only known by locals, discover unusual oddities, and so much more!",
//                 "duration": "2 hours",
//                 "notes": [],
//                 "inclusions": [],
//                 "exclusions": [],
//                 "displayInfos": [],
//                 "policies": [],
//                 "reviews": [],
//                 "ratingsCount": [],
//                 "reviewCount": 0,
//                 "rating": 0.0,
//                 "maxPassengerCount": 0,
//                 "offers": []
//             },
//             "bookingQuestions": [],
//             "fareType": "Negotiated",
//             "displayFare": {
//                 "currency": "USD",
//                 "totalFareStartsFrom": 63.19,
//                 "breakUp": {
//                     "baseFareStartsFrom": 18.61,
//                     "taxes": [],
//                     "fees": [],
//                     "discounts": [],
//                     "markups": [
//                         {
//                             "source": "Agency",
//                             "desc": "Agency",
//                             "amount": 30.0
//                         },
//                         {
//                             "source": "Agency",
//                             "desc": "Partner Markup",
//                             "amount": 14.58
//                         }
//                     ]
//                 },
//                 "isRefundable": true
//             }
//         },
//         {
//             "id": "200006P48",
//             "name": "Long Beach Bash Scavenger Hunt",
//             "supplierId": "36cj0ou718g",
//             "categories": [
//                 {
//                     "id": "12",
//                     "name": "Tours & Sightseeing"
//                 }
//             ],
//             "content": {
//                 "media": {
//                     "primaryImage": {
//                         "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/cf/97/9f.jpg",
//                         "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0b/cf/97/9f.jpg",
//                         "caption": "Long Beach Bash Scavenger Hunt"
//                     },
//                     "images": []
//                 },
//                 "location": {
//                     "address": {
//                         "state": {
//                             "name": "California"
//                         },
//                         "countryCode": "US",
//                         "city": {
//                             "name": "Long Beach",
//                             "code": "LGB"
//                         }
//                     },
//                     "geoCode": {
//                         "lat": 33.7683,
//                         "long": -118.1956
//                     }
//                 },
//                 "summary": "Our very unique, immersive adventures are the only ones of their kind. We, unlike other companies, provide your very own remote, interactive, live host to assist and encourage you along. We are an Austin, TX-based global custom event design company offering scavenger hunts and other events in 150 cities in North America and beyond! Our specially hand-crafted adventures are equal parts tour, creative challenge, detective hunt, and social experiment! <br><br>Guests get to discover in an alternate reality our favorite hidden gems off the beaten trail and creatively interpret fun art, history, and culture clues - for points! They get to enjoy fame and glory while appearing on our website’s international leaderboard, no matter what their score. They get to essentially race other teams in other cities, even if they don’t have competitors who have signed up in their city! Get ready to local authors, experience the favorite hangouts only known by locals, discover unusual oddities, and so much more!",
//                 "duration": "2 hours",
//                 "notes": [],
//                 "inclusions": [],
//                 "exclusions": [],
//                 "displayInfos": [],
//                 "policies": [],
//                 "reviews": [],
//                 "ratingsCount": [],
//                 "reviewCount": 1,
//                 "rating": 5.0,
//                 "maxPassengerCount": 0,
//                 "offers": []
//             },
//             "bookingQuestions": [],
//             "fareType": "Negotiated",
//             "displayFare": {
//                 "currency": "USD",
//                 "totalFareStartsFrom": 64.34,
//                 "breakUp": {
//                     "baseFareStartsFrom": 19.49,
//                     "taxes": [],
//                     "fees": [],
//                     "discounts": [],
//                     "markups": [
//                         {
//                             "source": "Agency",
//                             "desc": "Agency",
//                             "amount": 30.0
//                         },
//                         {
//                             "source": "Agency",
//                             "desc": "Partner Markup",
//                             "amount": 14.85
//                         }
//                     ]
//                 },
//                 "isRefundable": true
//             }
//         },
//         {
//             "id": "359154P2",
//             "name": "Haunted Catalina Ghost Tour",
//             "supplierId": "36cj0ou718g",
//             "categories": [
//                 {
//                     "id": "16",
//                     "name": "Outdoor Activities"
//                 }
//             ],
//             "content": {
//                 "media": {
//                     "primaryImage": {
//                         "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0f/48/78/69.jpg",
//                         "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0f/48/78/69.jpg",
//                         "caption": "Haunted Catalina Ghost Tour"
//                     },
//                     "images": []
//                 },
//                 "location": {
//                     "address": {
//                         "state": {
//                             "name": "California"
//                         },
//                         "countryCode": "US",
//                         "city": {
//                             "name": "Catalina Island"
//                         }
//                     },
//                     "geoCode": {
//                         "lat": 33.38789,
//                         "long": -118.41631
//                     }
//                 },
//                 "summary": "Tour the historic Village of Avalon with our local historian. Together you will walk through Avalon while exploring the spooky history and paranormal mysteries of Catalina. Learn the difference between a spirit or a ghost. Understand why Catalina is so haunted, and why our guide has proof of the other side. This is the only Ghost Tour on Catalina and has been voted one of the Top Ten Ghost Tours in The Country from USA TODAY.",
//                 "duration": "1 hour 30 minutes",
//                 "notes": [],
//                 "inclusions": [],
//                 "exclusions": [],
//                 "displayInfos": [],
//                 "policies": [],
//                 "reviews": [],
//                 "ratingsCount": [],
//                 "reviewCount": 0,
//                 "rating": 0.0,
//                 "maxPassengerCount": 0,
//                 "offers": []
//             },
//             "bookingQuestions": [],
//             "fareType": "Negotiated",
//             "displayFare": {
//                 "currency": "USD",
//                 "totalFareStartsFrom": 66.00,
//                 "breakUp": {
//                     "baseFareStartsFrom": 20.77,
//                     "taxes": [],
//                     "fees": [],
//                     "discounts": [],
//                     "markups": [
//                         {
//                             "source": "Agency",
//                             "desc": "Agency",
//                             "amount": 30.0
//                         },
//                         {
//                             "source": "Agency",
//                             "desc": "Partner Markup",
//                             "amount": 15.23
//                         }
//                     ]
//                 },
//                 "isRefundable": true
//             }
//         },
//         {
//             "id": "317031P4",
//             "name": "Long Beach Self-Guided Bike Tour",
//             "supplierId": "36cj0ou718g",
//             "categories": [
//                 {
//                     "id": "16",
//                     "name": "Outdoor Activities"
//                 }
//             ],
//             "content": {
//                 "media": {
//                     "primaryImage": {
//                         "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/fa/87/c7.jpg",
//                         "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0b/fa/87/c7.jpg",
//                         "caption": "Long Beach Self-Guided Bike Tour"
//                     },
//                     "images": []
//                 },
//                 "location": {
//                     "address": {
//                         "state": {
//                             "name": "California"
//                         },
//                         "countryCode": "US",
//                         "city": {
//                             "name": "Long Beach",
//                             "code": "LGB"
//                         }
//                     },
//                     "geoCode": {
//                         "lat": 33.7683,
//                         "long": -118.1956
//                     }
//                 },
//                 "summary": "Shoreline Village is located right on the edge of Rainbow Harbor, where you’re guaranteed to roll past a crowd of extravagant commercial and recreational ships before hitting the Pike, one of the most unique waterfront shopping centers in Southern California. After weaving through Pike and its surrounding points of interest, take off along the five-mile long Shoreline Pedestrian Bikeway. This paved bikeway takes you up the coast to Naples, a beautifully unique neighborhood of Long Beach appropriately named after its Italian roots.",
//                 "duration": "4 hours",
//                 "notes": [],
//                 "inclusions": [],
//                 "exclusions": [],
//                 "displayInfos": [],
//                 "policies": [],
//                 "reviews": [],
//                 "ratingsCount": [],
//                 "reviewCount": 1,
//                 "rating": 5.0,
//                 "maxPassengerCount": 0,
//                 "offers": []
//             },
//             "bookingQuestions": [],
//             "fareType": "Negotiated",
//             "displayFare": {
//                 "currency": "USD",
//                 "totalFareStartsFrom": 67.08,
//                 "breakUp": {
//                     "baseFareStartsFrom": 21.6,
//                     "taxes": [],
//                     "fees": [],
//                     "discounts": [],
//                     "markups": [
//                         {
//                             "source": "Agency",
//                             "desc": "Agency",
//                             "amount": 30.0
//                         },
//                         {
//                             "source": "Agency",
//                             "desc": "Partner Markup",
//                             "amount": 15.48
//                         }
//                     ]
//                 },
//                 "isRefundable": true
//             }
//         },
//         {
//             "id": "317031P2",
//             "name": "4-Wheel Surrey Cycle Rental in Long Beach Shoreline Village",
//             "supplierId": "36cj0ou718g",
//             "categories": [
//                 {
//                     "id": "12",
//                     "name": "Tours & Sightseeing"
//                 }
//             ],
//             "content": {
//                 "media": {
//                     "primaryImage": {
//                         "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/fa/1a/37.jpg",
//                         "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0b/fa/1a/37.jpg",
//                         "caption": "4-Wheel Surrey Cycle Rental in Long Beach Shoreline Village"
//                     },
//                     "images": []
//                 },
//                 "location": {
//                     "address": {
//                         "state": {
//                             "name": "California"
//                         },
//                         "countryCode": "US",
//                         "city": {
//                             "name": "Long Beach",
//                             "code": "LGB"
//                         }
//                     },
//                     "geoCode": {
//                         "lat": 33.7683,
//                         "long": -118.1956
//                     }
//                 },
//                 "summary": "4-Wheel Surrey cycles are as fun as they are unique! The flagship cycle of the Wheel Fun Rentals fleet, this modern day carriage is perfect for some one-on-one time with your significant other, or a fun outing with small children! Millions and millions of people have enjoyed our 4-wheeled cycles for over twenty years. Our four wheel Surreys create a memory that will last a lifetime.",
//                 "duration": "1 hour",
//                 "notes": [],
//                 "inclusions": [],
//                 "exclusions": [],
//                 "displayInfos": [],
//                 "policies": [],
//                 "reviews": [],
//                 "ratingsCount": [],
//                 "reviewCount": 1,
//                 "rating": 1.0,
//                 "maxPassengerCount": 0,
//                 "offers": []
//             },
//             "bookingQuestions": [],
//             "fareType": "Negotiated",
//             "displayFare": {
//                 "currency": "USD",
//                 "totalFareStartsFrom": 69.24,
//                 "breakUp": {
//                     "baseFareStartsFrom": 23.26,
//                     "taxes": [],
//                     "fees": [],
//                     "discounts": [],
//                     "markups": [
//                         {
//                             "source": "Agency",
//                             "desc": "Agency",
//                             "amount": 30.0
//                         },
//                         {
//                             "source": "Agency",
//                             "desc": "Partner Markup",
//                             "amount": 15.98
//                         }
//                     ]
//                 },
//                 "isRefundable": true
//             }
//         },
//         {
//             "id": "293546P1",
//             "name": "Long Beach Fitness Tour",
//             "supplierId": "36cj0ou718g",
//             "categories": [
//                 {
//                     "id": "16",
//                     "name": "Outdoor Activities"
//                 }
//             ],
//             "content": {
//                 "media": {
//                     "primaryImage": {
//                         "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0c/fc/70/1f.jpg",
//                         "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0c/fc/70/1f.jpg",
//                         "caption": "Long Beach Fitness Tour"
//                     },
//                     "images": []
//                 },
//                 "location": {
//                     "address": {
//                         "state": {
//                             "name": "California"
//                         },
//                         "countryCode": "US",
//                         "city": {
//                             "name": "Long Beach",
//                             "code": "LGB"
//                         }
//                     },
//                     "geoCode": {
//                         "lat": 33.7683,
//                         "long": -118.1956
//                     }
//                 },
//                 "summary": "This is a regular meet up to stay fit, strong and create community. Join us with your own bike for free, we take gratuities and love gifts.",
//                 "duration": "2 to 3 hours",
//                 "notes": [],
//                 "inclusions": [],
//                 "exclusions": [],
//                 "displayInfos": [],
//                 "policies": [],
//                 "reviews": [],
//                 "ratingsCount": [],
//                 "reviewCount": 0,
//                 "rating": 0.0,
//                 "maxPassengerCount": 0,
//                 "offers": []
//             },
//             "bookingQuestions": [],
//             "fareType": "Negotiated",
//             "displayFare": {
//                 "currency": "USD",
//                 "totalFareStartsFrom": 76.79,
//                 "breakUp": {
//                     "baseFareStartsFrom": 29.07,
//                     "taxes": [],
//                     "fees": [],
//                     "discounts": [],
//                     "markups": [
//                         {
//                             "source": "Agency",
//                             "desc": "Agency",
//                             "amount": 30.0
//                         },
//                         {
//                             "source": "Agency",
//                             "desc": "Partner Markup",
//                             "amount": 17.72
//                         }
//                     ]
//                 },
//                 "isRefundable": true
//             }
//         },
//         {
//             "id": "130331P1",
//             "name": "Fantastic Catalina Race",
//             "supplierId": "36cj0ou718g",
//             "categories": [
//                 {
//                     "id": "16",
//                     "name": "Outdoor Activities"
//                 }
//             ],
//             "content": {
//                 "media": {
//                     "primaryImage": {
//                         "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/8e/23/8e.jpg",
//                         "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/8e/23/8e.jpg",
//                         "caption": "Fantastic Catalina Race"
//                     },
//                     "images": []
//                 },
//                 "location": {
//                     "address": {
//                         "state": {
//                             "name": "California"
//                         },
//                         "countryCode": "US",
//                         "city": {
//                             "name": "Catalina Island"
//                         }
//                     },
//                     "geoCode": {
//                         "lat": 33.38789,
//                         "long": -118.41631
//                     }
//                 },
//                 "summary": "NEW COVID PROTOCOLS: Players will need to follow all state and local guidelines while playing the Fantastic Catalina Race.<br><br>\"A Truly Amazing Race\"!! The Fantastic Catalina Race is a unique hybrid of a sightseeing tour and interactive mystery novel around Avalon. Our races are unlike anything you've ever done before, and we offer an experience you will never forget. Great for the whole family! Great for Groups!<br>",
//                 "duration": "1 hour 30 minutes",
//                 "notes": [],
//                 "inclusions": [],
//                 "exclusions": [],
//                 "displayInfos": [],
//                 "policies": [],
//                 "reviews": [],
//                 "ratingsCount": [],
//                 "reviewCount": 7,
//                 "rating": 3.6,
//                 "maxPassengerCount": 0,
//                 "offers": []
//             },
//             "bookingQuestions": [],
//             "fareType": "Negotiated",
//             "displayFare": {
//                 "currency": "USD",
//                 "totalFareStartsFrom": 98.40,
//                 "breakUp": {
//                     "baseFareStartsFrom": 45.69,
//                     "taxes": [],
//                     "fees": [],
//                     "discounts": [],
//                     "markups": [
//                         {
//                             "source": "Agency",
//                             "desc": "Agency",
//                             "amount": 30.0
//                         },
//                         {
//                             "source": "Agency",
//                             "desc": "Partner Markup",
//                             "amount": 22.71
//                         }
//                     ]
//                 },
//                 "isRefundable": true
//             }
//         },
//         {
//             "id": "6188P10",
//             "name": "Los Angeles Highlights Tour from Seal Beach and Sunset Beach",
//             "supplierId": "36cj0ou718g",
//             "categories": [
//                 {
//                     "id": "12",
//                     "name": "Tours & Sightseeing"
//                 }
//             ],
//             "content": {
//                 "media": {
//                     "primaryImage": {
//                         "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/f4/90/95.jpg",
//                         "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0e/f4/90/95.jpg",
//                         "caption": "Los Angeles Highlights Tour from Seal Beach and Sunset Beach"
//                     },
//                     "images": []
//                 },
//                 "location": {
//                     "address": {
//                         "state": {
//                             "name": "California"
//                         },
//                         "countryCode": "US",
//                         "city": {
//                             "name": "Long Beach",
//                             "code": "LGB"
//                         }
//                     },
//                     "geoCode": {
//                         "lat": 33.7683,
//                         "long": -118.1956
//                     }
//                 },
//                 "summary": "Staying in Seal Beach or Sunset Beach and want to explore Los Angeles but don't have much time? Then check out this highlights tour of Los Angeles . See downtown Los Angeles, the Sunset Strip, the Hollywood Sign and the TCL Chinese Theatre as you listen to narration by your informative guide. Visit movie locations featured in blockbusters including ‘King Kong,’ ‘Armageddon’ and ‘Independence Day. ’City of Beverly Hills, Santa Monica and Venice Beach. With hotel pickup and drop-off included, this is a convenient way to cover lots of can’t-miss Los Angeles landmarks in a relatively short period of time. <br><br>This small-group tour is limited to 14 people to ensure more individualized attention from your guide.",
//                 "duration": "8 hours",
//                 "notes": [],
//                 "inclusions": [],
//                 "exclusions": [],
//                 "displayInfos": [],
//                 "policies": [],
//                 "reviews": [],
//                 "ratingsCount": [],
//                 "reviewCount": 0,
//                 "rating": 0.0,
//                 "maxPassengerCount": 0,
//                 "offers": []
//             },
//             "bookingQuestions": [],
//             "fareType": "Negotiated",
//             "displayFare": {
//                 "currency": "USD",
//                 "totalFareStartsFrom": 168.10,
//                 "breakUp": {
//                     "baseFareStartsFrom": 99.31,
//                     "taxes": [],
//                     "fees": [],
//                     "discounts": [],
//                     "markups": [
//                         {
//                             "source": "Agency",
//                             "desc": "Agency",
//                             "amount": 30.0
//                         },
//                         {
//                             "source": "Agency",
//                             "desc": "Partner Markup",
//                             "amount": 38.79
//                         }
//                     ]
//                 },
//                 "isRefundable": true
//             }
//         },
//         {
//             "id": "292381P1",
//             "name": "Long Beach California Vintage Moped Rental 24-Hour",
//             "supplierId": "36cj0ou718g",
//             "categories": [
//                 {
//                     "id": "12",
//                     "name": "Tours & Sightseeing"
//                 }
//             ],
//             "content": {
//                 "media": {
//                     "primaryImage": {
//                         "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/82/48/94.jpg",
//                         "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0b/82/48/94.jpg",
//                         "caption": "Long Beach California Vintage Moped Rental 24-Hour"
//                     },
//                     "images": []
//                 },
//                 "location": {
//                     "address": {
//                         "state": {
//                             "name": "California"
//                         },
//                         "countryCode": "US",
//                         "city": {
//                             "name": "Long Beach",
//                             "code": "LGB"
//                         }
//                     },
//                     "geoCode": {
//                         "lat": 33.7683,
//                         "long": -118.1956
//                     }
//                 },
//                 "summary": "We provide our customers with amazing and unique experiences of Long Beach California from the usage of our classic Vespa scooters or our collection of vintage mopeds. Our equipment looks feels and sounds cool. Just looking at one in person and makes you involuntarily smile from pure joy.",
//                 "duration": "1 day",
//                 "notes": [],
//                 "inclusions": [],
//                 "exclusions": [],
//                 "displayInfos": [],
//                 "policies": [],
//                 "reviews": [],
//                 "ratingsCount": [],
//                 "reviewCount": 0,
//                 "rating": 0.0,
//                 "maxPassengerCount": 0,
//                 "offers": []
//             },
//             "bookingQuestions": [],
//             "fareType": "Negotiated",
//             "displayFare": {
//                 "currency": "USD",
//                 "totalFareStartsFrom": 168.79,
//                 "breakUp": {
//                     "baseFareStartsFrom": 99.84,
//                     "taxes": [],
//                     "fees": [],
//                     "discounts": [],
//                     "markups": [
//                         {
//                             "source": "Agency",
//                             "desc": "Agency",
//                             "amount": 30.0
//                         },
//                         {
//                             "source": "Agency",
//                             "desc": "Partner Markup",
//                             "amount": 38.95
//                         }
//                     ]
//                 },
//                 "isRefundable": false
//             }
//         },
//         {
//             "id": "147508P131",
//             "name": "Hire Photographer, Professional Photo Shoot - Long Beach",
//             "supplierId": "36cj0ou718g",
//             "categories": [
//                 {
//                     "id": "12",
//                     "name": "Tours & Sightseeing"
//                 }
//             ],
//             "content": {
//                 "media": {
//                     "primaryImage": {
//                         "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0d/bd/85/68.jpg",
//                         "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0d/bd/85/68.jpg",
//                         "caption": "Hire Photographer, Professional Photo Shoot - Long Beach"
//                     },
//                     "images": []
//                 },
//                 "location": {
//                     "address": {
//                         "state": {
//                             "name": "California"
//                         },
//                         "countryCode": "US",
//                         "city": {
//                             "name": "Long Beach",
//                             "code": "LGB"
//                         }
//                     },
//                     "geoCode": {
//                         "lat": 33.7683,
//                         "long": -118.1956
//                     }
//                 },
//                 "summary": "Glamorous professional photo shoot in unique Long Beach locations. <br>The Photo Experience will create amazing photo memories from your visit. You will be able to see undiscovered locations, and get the best photo story from your Long Beach visit. We can tailor each photo shoot to meet your requirements. <br><br>Our Photoshoots are ideal for any Tourists <br><br>- Solo Traveler<br>- Couples<br>- Groups <br>- Hen/Bachelorette & Stag/Bachelor Parties<br>- Families <br>- Secret proposal/Engagement <br>- Honeymoon <br>- Experienced Influencers and Models<br>- New Influencers and Models<br><br>What's Included:<br>A Private online viewing gallery <br>- 1 hour = 20 professionally edited photos*<br>- 2 hours = 30 professionally edited photos*<br>- 3 hours = 40 professionally edited photos*<br>- 4 hours = 50 professionally edited photos*<br>* same set of images <br><br>- A unique location professional shoot experience<br><br>- DELIVERY - Up to 14 days after photoshoot. <br><br>What's Excluded: <br>- Transportation <br>- Entry fees",
//                 "duration": "2 hours",
//                 "notes": [],
//                 "inclusions": [],
//                 "exclusions": [],
//                 "displayInfos": [],
//                 "policies": [],
//                 "reviews": [],
//                 "ratingsCount": [],
//                 "reviewCount": 0,
//                 "rating": 0.0,
//                 "maxPassengerCount": 0,
//                 "offers": []
//             },
//             "bookingQuestions": [],
//             "fareType": "Negotiated",
//             "displayFare": {
//                 "currency": "USD",
//                 "totalFareStartsFrom": 186.97,
//                 "breakUp": {
//                     "baseFareStartsFrom": 113.82,
//                     "taxes": [],
//                     "fees": [],
//                     "discounts": [],
//                     "markups": [
//                         {
//                             "source": "Agency",
//                             "desc": "Agency",
//                             "amount": 30.0
//                         },
//                         {
//                             "source": "Agency",
//                             "desc": "Partner Markup",
//                             "amount": 43.15
//                         }
//                     ]
//                 },
//                 "isRefundable": true
//             }
//         },
//         {
//             "id": "351800P1",
//             "name": "Mermaid Photo Shoot in Catalina Island",
//             "supplierId": "36cj0ou718g",
//             "categories": [
//                 {
//                     "id": "12",
//                     "name": "Tours & Sightseeing"
//                 }
//             ],
//             "content": {
//                 "media": {
//                     "primaryImage": {
//                         "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/f2/b7/dd.jpg",
//                         "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0e/f2/b7/dd.jpg",
//                         "caption": "Mermaid Photo Shoot in Catalina Island"
//                     },
//                     "images": []
//                 },
//                 "location": {
//                     "address": {
//                         "state": {
//                             "name": "California"
//                         },
//                         "countryCode": "US",
//                         "city": {
//                             "name": "Catalina Island"
//                         }
//                     },
//                     "geoCode": {
//                         "lat": 33.38789,
//                         "long": -118.41631
//                     }
//                 },
//                 "summary": "You will never forget how you feel when you put on a mermaid tail for the first time! It is so easy to let your inner goddess shine during this photoshoot. You will feel empowered, beautiful, and whimsical. We capture genuine smiles after your nervousness transforms into laughter and enjoyment! Our mermaid tails extend up past your belly button, giving you a very flattering silhouette. We offer all sizes for children, even toddlers, as well as women sizes 0-22. Mer-men are welcome with sizing available from S-XXXL.",
//                 "duration": "1 hour",
//                 "notes": [],
//                 "inclusions": [],
//                 "exclusions": [],
//                 "displayInfos": [],
//                 "policies": [],
//                 "reviews": [],
//                 "ratingsCount": [],
//                 "reviewCount": 2,
//                 "rating": 3.0,
//                 "maxPassengerCount": 0,
//                 "offers": []
//             },
//             "bookingQuestions": [],
//             "fareType": "Negotiated",
//             "displayFare": {
//                 "currency": "USD",
//                 "totalFareStartsFrom": 196.83,
//                 "breakUp": {
//                     "baseFareStartsFrom": 121.41,
//                     "taxes": [],
//                     "fees": [],
//                     "discounts": [],
//                     "markups": [
//                         {
//                             "source": "Agency",
//                             "desc": "Agency",
//                             "amount": 30.0
//                         },
//                         {
//                             "source": "Agency",
//                             "desc": "Partner Markup",
//                             "amount": 45.42
//                         }
//                     ]
//                 },
//                 "isRefundable": true
//             }
//         },
//         {
//             "id": "182253P1",
//             "name": "3 Hour Sailing Lesson: Rainbow Harbor Long Beach to the Pacific Ocean",
//             "supplierId": "36cj0ou718g",
//             "categories": [
//                 {
//                     "id": "17",
//                     "name": "Outdoor Activities"
//                 }
//             ],
//             "content": {
//                 "media": {
//                     "primaryImage": {
//                         "url": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/38/f1/64.jpg",
//                         "thumbnailUrl": "https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0b/38/f1/64.jpg",
//                         "caption": "3 Hour Sailing Lesson: Rainbow Harbor Long Beach to the Pacific Ocean"
//                     },
//                     "images": []
//                 },
//                 "location": {
//                     "address": {
//                         "state": {
//                             "name": "California"
//                         },
//                         "countryCode": "US",
//                         "city": {
//                             "name": "Long Beach",
//                             "code": "LGB"
//                         }
//                     },
//                     "geoCode": {
//                         "lat": 33.7683,
//                         "long": -118.1956
//                     }
//                 },
//                 "summary": "Beginner to Advanced Sailing Lesson/ Instruction, for Up to 6 Passengers. No Experience Needed, All Ages, Animals/ Pets Allowed",
//                 "duration": "3 hours",
//                 "notes": [],
//                 "inclusions": [],
//                 "exclusions": [],
//                 "displayInfos": [],
//                 "policies": [],
//                 "reviews": [],
//                 "ratingsCount": [],
//                 "reviewCount": 1,
//                 "rating": 5.0,
//                 "maxPassengerCount": 0,
//                 "offers": []
//             },
//             "bookingQuestions": [],
//             "fareType": "Negotiated",
//             "displayFare": {
//                 "currency": "USD",
//                 "totalFareStartsFrom": 564.25,
//                 "breakUp": {
//                     "baseFareStartsFrom": 394.58,
//                     "taxes": [],
//                     "fees": [],
//                     "discounts": [],
//                     "markups": [
//                         {
//                             "source": "Agency",
//                             "desc": "Agency",
//                             "amount": 39.46
//                         },
//                         {
//                             "source": "Agency",
//                             "desc": "Partner Markup",
//                             "amount": 130.21
//                         }
//                     ]
//                 },
//                 "isRefundable": true
//             }
//         }
//     ],
//     "paging": {
//         "pageNo": 1,
//         "pageSize": 30,
//         "totalRecords": 16
//     }
// }
   
//    service.searchresult.and.callFake(() => {
//      return of(response);
//    })
//    hotelTabComponent.searchresult();
//    fixture.detectChanges();
//    expect(response.activities).toEqual(hotelTabComponent.finalresult);    
//   });

// });





































// import { SearchComponentHotel } from './search.component';
// import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { of } from 'rxjs'

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { SearchService } from './search.service';
// import { HotelcommonService } from '../hotelcommon.service';
// import { MasterService } from 'src/app/service/master.service';
// import { HttpClientModule } from '@angular/common/http';

// describe('HotelTabComponent', () => {
//   let hotelTabComponent: SearchComponentHotel;
//   let fixture: ComponentFixture<SearchComponentHotel>;
//  let service:jasmine.SpyObj<SearchService> 
//  let parentservice:jasmine.SpyObj<HotelcommonService>

//  let hotelTabComponent1:SearchComponentHotel
//   beforeEach(async () => {
//     service= jasmine.createSpyObj("SearchService",["searchinit","searchstatus","searchresult"]);
//     await TestBed.configureTestingModule({
//       declarations: [ SearchComponentHotel ],
//       imports : [
//           HttpClientTestingModule,
//           ReactiveFormsModule,
//           FormsModule],
//       providers : [
//         {
//             provide:SearchService,
//             usevalue:service
//         }
//       ]
//     })
//     .compileComponents();
    
//     fixture = TestBed.createComponent(SearchComponentHotel);
//     hotelTabComponent = fixture.componentInstance;
//     //hotelTabComponent1=new SearchComponentHotel(service,parentservice)
//     fixture.detectChanges();
//   });



//   it('should create', () => {
//     expect(hotelTabComponent).toBeTruthy();
//   });

// //   it('should be able to call searchinit ', fakeAsync( () => {

// //     const sessionId = 'ye'


    
// //     const searchinit = service.searchinit.and.returnValue(of({sessionId}))

// //     const fixture = TestBed.createComponent(SearchComponentHotel);

// //     const app = fixture.componentInstance;



// //     hotelTabComponent.searchinit()

// //     tick()



// //     expect(searchinit).toHaveBeenCalledTimes(1)



// //     // expect(app.s).toBe(sessionId)

   

// //   }))
//   it('should call the search-init and save the response',() =>{
//    const sessId=''
//    let response:any ={}; 
//    response = {
//     "sessionId": "723c3073-e233-4462-b626-2d38a4d90ba6-HLNXT$1371"
//     };

//   service.searchinit.and.callFake(()=>{
//     // parentservice.globalsessionid=response.sessionId
//    return of(response);
//   });
// //   const searchinit = service.searchinit.and.returnValue(of({sessId}))
//   expect(service.searchinit).toHaveBeenCalledTimes(1)
   
//   let spy= spyOn(hotelTabComponent, 'searchstatus'); 
//   hotelTabComponent.searchinit();
//   fixture.detectChanges();
//   expect(parentservice.globalsessionid).toBe(sessId)
//   expect(response.hasOwnProperty('sessionId')).toBe(true);
//   });
  


//   it('sholud call the search-status function and check if status completed',() =>{

//     let sampleBody = {  
//       "sessionId":"723c3073-e233-4462-b626-2d38a4d90ba6-HLNXT$1371",
//       "paging":{  
//          "pageNo":1,
//          "pageSize":20,
//          "orderBy":"price asc"
//       },
//       "filters":{  
//            "minHotelPrice": 1,
//                "maxHotelPrice": 10000,
//                "minHotelRating": 1,
//                "maxHotelRating": 5,
//                "hotelChains": []
//       },
//       "currency":"CAD",
//       "contentPrefs":[  
//          "All"
//       ]
//    };

//    let response = {
//     "status": "Completed",
//     "resultCount": 115
//    }

//   // const spy = spyOn(hotelTabComponent,'searchStatus');
   
//    service.searchstatus.and.callFake(()=>{
//      return of(response);
//    });
   
//    spyOn(hotelTabComponent,'searchresult');
//    hotelTabComponent.searchstatus();
//    fixture.detectChanges();
//    expect(response.status).toBe("Completed");
//    //expect(spy).toHaveBeenCalled();
//   });


  
// //   it('should call the search-result function and get the result-array',()=>{
   
// //    const fixture=TestBed.createComponent(SearchComponentHotel)
// //    const sch=fixture.componentInstance
// //    let response = {
// //     "sessionId": "723c3073-e233-4462-b626-2d38a4d90ba6-HLNXT$1371",
// //     "hotels": [
// //           {
// //             "id": "10805",
// //             "name": "Mardi Gras Hotel & Casino",
// //             "displayFare": {
// //                 "usdEquivalentExchangeRate": 0.760651,
// //                 "currency": "CAD",
// //                 "totalFare": 1191.42,
// //                 "breakup": {
// //                     "baseFare": 657.54,
// //                     "taxes": [
// //                         {
// //                             "amount": 87.98
// //                         }
// //                     ],
// //                     "fees": [],
// //                     "discounts": [],
// //                     "markups": [
// //                         {
// //                             "source": "Agency",
// //                             "amount": 170.96
// //                         },
// //                         {
// //                             "source": "Agency",
// //                             "desc": "Partner Markup",
// //                             "amount": 274.94
// //                         }
// //                     ]
// //                 },
// //                 "commissions": []
// //             },
// //             "agencyFare": {
// //                 "currency": "USD",
// //                 "totalFare": 906.26,
// //                 "breakup": {
// //                     "baseFare": 500.16,
// //                     "taxes": [
// //                         {
// //                             "amount": 66.92
// //                         }
// //                     ],
// //                     "fees": [],
// //                     "discounts": [],
// //                     "markups": [
// //                         {
// //                             "source": "Supplier",
// //                             "amount": 130.04
// //                         },
// //                         {
// //                             "source": "Supplier",
// //                             "desc": "Partner Markup",
// //                             "amount": 209.14
// //                         }
// //                     ]
// //                 },
// //                 "commissions": []
// //             },
// //             "purchaseOption": {
// //                 "totalPurchaseUnits": 1,
// //                 "cashCurrency": "CAD",
// //                 "pointsCurrency": "Points",
// //                 "rewards": [
// //                     {
// //                         "id": "1755|1",
// //                         "name": "Hotel Reward - BaseR",
// //                         "rank": 1,
// //                         "type": "Variable_TieredVariable_LAPF_HybridFTP",
// //                         "recommendation": {
// //                             "fees": [
// //                                 {
// //                                     "cash": 0.0,
// //                                     "points": 0.0
// //                                 }
// //                             ],
// //                             "maxQuantity": 1,
// //                             "cash": 0.0,
// //                             "points": 119142.0
// //                         },
// //                         "isEligible": true,
// //                         "ruleSet": {
// //                             "minimumPoints": 1.0,
// //                             "maximumPoints": 119142.0,
// //                             "pointToCashFactor": {
// //                                 "value": 0.0100000,
// //                                 "operator": "Multiply"
// //                             },
// //                             "cashRoundingOff": 0.0,
// //                             "pointStepSize": 1.0000,
// //                             "roundingType": "Natural"
// //                         },
// //                         "strikeoutValue": {
// //                             "cash": 0.0,
// //                             "points": 0.0
// //                         },
// //                         "actualValue": {
// //                             "cash": 0.0,
// //                             "points": 119142.0
// //                         },
// //                         "stateBag": [
// //                             {
// //                                 "key": "IsTotalFareEquivalentToNetFare",
// //                                 "value": "False"
// //                             },
// //                             {
// //                                 "key": "RequiresBinValidation",
// //                                 "value": "False"
// //                             },
// //                             {
// //                                 "key": "RequiresOrderHistoryValidation",
// //                                 "value": "False"
// //                             },
// //                             {
// //                                 "key": "DiscountAmount",
// //                                 "value": "0"
// //                             },
// //                             {
// //                                 "key": "DiscountType",
// //                                 "value": "None"
// //                             },
// //                             {
// //                                 "key": "FareQuote",
// //                                 "value": "1191.42"
// //                             },
// //                             {
// //                                 "key": "FareQuoteAdjustmentAmount",
// //                                 "value": "0"
// //                             },
// //                             {
// //                                 "key": "UnitSupplierFee",
// //                                 "value": "0"
// //                             },
// //                             {
// //                                 "key": "UnitTax",
// //                                 "value": "17.6"
// //                             },
// //                             {
// //                                 "key": "ProgramCurrencyMinimumType",
// //                                 "value": "Numeric"
// //                             },
// //                             {
// //                                 "key": "ShortFallFactorType",
// //                                 "value": "Multiply"
// //                             },
// //                             {
// //                                 "key": "CrossOffFareQuote",
// //                                 "value": "0"
// //                             },
// //                             {
// //                                 "key": "PointCalculationFactor",
// //                                 "value": "0.0100000"
// //                             }
// //                         ],
// //                         "redemption": {
// //                             "id": "1755|1",
// //                             "name": "Hotel Reward - BaseR",
// //                             "type": "Variable_TieredVariable_LAPF_HybridFTP",
// //                             "recommendation": {
// //                                 "fees": [
// //                                     {
// //                                         "cash": 0.0,
// //                                         "points": 0.0
// //                                     }
// //                                 ],
// //                                 "maxQuantity": 1,
// //                                 "cash": 0.0,
// //                                 "points": 119142.0
// //                             },
// //                             "isEligible": true,
// //                             "ruleSet": {
// //                                 "minimumPoints": 1.0,
// //                                 "maximumPoints": 119142.0,
// //                                 "pointToCashFactor": {
// //                                     "value": 0.0100000,
// //                                     "operator": "Multiply"
// //                                 },
// //                                 "cashRoundingOff": 0.0,
// //                                 "pointStepSize": 1.0000,
// //                                 "roundingType": "Natural"
// //                             },
// //                             "strikeoutValue": {
// //                                 "cash": 0.0,
// //                                 "points": 0.0
// //                             },
// //                             "actualValue": {
// //                                 "cash": 0.0,
// //                                 "points": 119142.0
// //                             },
// //                             "stateBag": [
// //                                 {
// //                                     "key": "IsTotalFareEquivalentToNetFare",
// //                                     "value": "False"
// //                                 },
// //                                 {
// //                                     "key": "RequiresBinValidation",
// //                                     "value": "False"
// //                                 },
// //                                 {
// //                                     "key": "RequiresOrderHistoryValidation",
// //                                     "value": "False"
// //                                 },
// //                                 {
// //                                     "key": "DiscountAmount",
// //                                     "value": "0"
// //                                 },
// //                                 {
// //                                     "key": "DiscountType",
// //                                     "value": "None"
// //                                 },
// //                                 {
// //                                     "key": "FareQuote",
// //                                     "value": "1191.42"
// //                                 },
// //                                 {
// //                                     "key": "FareQuoteAdjustmentAmount",
// //                                     "value": "0"
// //                                 },
// //                                 {
// //                                     "key": "UnitSupplierFee",
// //                                     "value": "0"
// //                                 },
// //                                 {
// //                                     "key": "UnitTax",
// //                                     "value": "17.6"
// //                                 },
// //                                 {
// //                                     "key": "ProgramCurrencyMinimumType",
// //                                     "value": "Numeric"
// //                                 },
// //                                 {
// //                                     "key": "ShortFallFactorType",
// //                                     "value": "Multiply"
// //                                 },
// //                                 {
// //                                     "key": "CrossOffFareQuote",
// //                                     "value": "0"
// //                                 },
// //                                 {
// //                                     "key": "PointCalculationFactor",
// //                                     "value": "0.0100000"
// //                                 }
// //                             ]
// //                         }
// //                     },
// //                     {
// //                         "id": "4910|1",
// //                         "name": "Hotel Redemption",
// //                         "rank": 2,
// //                         "type": "Variable_TieredVariable_LAPF_HybridFTP",
// //                         "recommendation": {
// //                             "fees": [
// //                                 {
// //                                     "cash": 0.0,
// //                                     "points": 0.0
// //                                 }
// //                             ],
// //                             "maxQuantity": 1,
// //                             "cash": 0.0,
// //                             "points": 93000.0
// //                         },
// //                         "isEligible": true,
// //                         "ruleSet": {
// //                             "minimumPoints": 1500.0,
// //                             "maximumPoints": 93000.0,
// //                             "pointToCashFactor": {
// //                                 "value": 0.0130000,
// //                                 "operator": "Multiply"
// //                             },
// //                             "cashRoundingOff": 0.0,
// //                             "pointStepSize": 1500.0000,
// //                             "roundingType": "Up"
// //                         },
// //                         "strikeoutValue": {
// //                             "cash": 0.0,
// //                             "points": 0.0
// //                         },
// //                         "actualValue": {
// //                             "cash": 0.0,
// //                             "points": 93000.0
// //                         },
// //                         "stateBag": [
// //                             {
// //                                 "key": "IsTotalFareEquivalentToNetFare",
// //                                 "value": "False"
// //                             },
// //                             {
// //                                 "key": "RequiresBinValidation",
// //                                 "value": "False"
// //                             },
// //                             {
// //                                 "key": "RequiresOrderHistoryValidation",
// //                                 "value": "False"
// //                             },
// //                             {
// //                                 "key": "DiscountAmount",
// //                                 "value": "0"
// //                             },
// //                             {
// //                                 "key": "DiscountType",
// //                                 "value": "None"
// //                             },
// //                             {
// //                                 "key": "FareQuote",
// //                                 "value": "1191.42"
// //                             },
// //                             {
// //                                 "key": "FareQuoteAdjustmentAmount",
// //                                 "value": "15"
// //                             },
// //                             {
// //                                 "key": "UnitSupplierFee",
// //                                 "value": "0"
// //                             },
// //                             {
// //                                 "key": "UnitTax",
// //                                 "value": "17.6"
// //                             },
// //                             {
// //                                 "key": "ProgramCurrencyMinimumType",
// //                                 "value": "Numeric"
// //                             },
// //                             {
// //                                 "key": "ShortFallFactorType",
// //                                 "value": "Multiply"
// //                             },
// //                             {
// //                                 "key": "CrossOffFareQuote",
// //                                 "value": "0"
// //                             },
// //                             {
// //                                 "key": "PointCalculationFactor",
// //                                 "value": "0.0130000"
// //                             }
// //                         ],
// //                         "redemption": {
// //                             "id": "4910|1",
// //                             "name": "Hotel Redemption",
// //                             "type": "Variable_TieredVariable_LAPF_HybridFTP",
// //                             "recommendation": {
// //                                 "fees": [
// //                                     {
// //                                         "cash": 0.0,
// //                                         "points": 0.0
// //                                     }
// //                                 ],
// //                                 "maxQuantity": 1,
// //                                 "cash": 0.0,
// //                                 "points": 93000.0
// //                             },
// //                             "isEligible": true,
// //                             "ruleSet": {
// //                                 "minimumPoints": 1500.0,
// //                                 "maximumPoints": 93000.0,
// //                                 "pointToCashFactor": {
// //                                     "value": 0.0130000,
// //                                     "operator": "Multiply"
// //                                 },
// //                                 "cashRoundingOff": 0.0,
// //                                 "pointStepSize": 1500.0000,
// //                                 "roundingType": "Up"
// //                             },
// //                             "strikeoutValue": {
// //                                 "cash": 0.0,
// //                                 "points": 0.0
// //                             },
// //                             "actualValue": {
// //                                 "cash": 0.0,
// //                                 "points": 93000.0
// //                             },
// //                             "stateBag": [
// //                                 {
// //                                     "key": "IsTotalFareEquivalentToNetFare",
// //                                     "value": "False"
// //                                 },
// //                                 {
// //                                     "key": "RequiresBinValidation",
// //                                     "value": "False"
// //                                 },
// //                                 {
// //                                     "key": "RequiresOrderHistoryValidation",
// //                                     "value": "False"
// //                                 },
// //                                 {
// //                                     "key": "DiscountAmount",
// //                                     "value": "0"
// //                                 },
// //                                 {
// //                                     "key": "DiscountType",
// //                                     "value": "None"
// //                                 },
// //                                 {
// //                                     "key": "FareQuote",
// //                                     "value": "1191.42"
// //                                 },
// //                                 {
// //                                     "key": "FareQuoteAdjustmentAmount",
// //                                     "value": "15"
// //                                 },
// //                                 {
// //                                     "key": "UnitSupplierFee",
// //                                     "value": "0"
// //                                 },
// //                                 {
// //                                     "key": "UnitTax",
// //                                     "value": "17.6"
// //                                 },
// //                                 {
// //                                     "key": "ProgramCurrencyMinimumType",
// //                                     "value": "Numeric"
// //                                 },
// //                                 {
// //                                     "key": "ShortFallFactorType",
// //                                     "value": "Multiply"
// //                                 },
// //                                 {
// //                                     "key": "CrossOffFareQuote",
// //                                     "value": "0"
// //                                 },
// //                                 {
// //                                     "key": "PointCalculationFactor",
// //                                     "value": "0.0130000"
// //                                 }
// //                             ]
// //                         }
// //                     },
// //                     {
// //                         "id": "2551|7",
// //                         "name": "Pay in Cash",
// //                         "rank": 3,
// //                         "type": "Purchase",
// //                         "recommendation": {
// //                             "fees": [
// //                                 {
// //                                     "cash": 0.0,
// //                                     "points": 0.0
// //                                 }
// //                             ],
// //                             "maxQuantity": 1,
// //                             "cash": 1191.42,
// //                             "points": 0.0
// //                         },
// //                         "isEligible": true,
// //                         "ruleSet": {
// //                             "minimumPoints": 0.0,
// //                             "maximumPoints": 0.0,
// //                             "pointToCashFactor": {
// //                                 "value": 0.0,
// //                                 "operator": "Multiply"
// //                             },
// //                             "cashRoundingOff": 0.0,
// //                             "pointStepSize": 1.0,
// //                             "roundingType": "None"
// //                         },
// //                         "strikeoutValue": {
// //                             "cash": 0.0,
// //                             "points": 0.0
// //                         },
// //                         "actualValue": {
// //                             "cash": 1191.42,
// //                             "points": 0.0
// //                         },
// //                         "stateBag": [
// //                             {
// //                                 "key": "IsTotalFareEquivalentToNetFare",
// //                                 "value": "False"
// //                             },
// //                             {
// //                                 "key": "RequiresBinValidation",
// //                                 "value": "False"
// //                             },
// //                             {
// //                                 "key": "RequiresOrderHistoryValidation",
// //                                 "value": "False"
// //                             },
// //                             {
// //                                 "key": "DiscountAmount",
// //                                 "value": "0"
// //                             },
// //                             {
// //                                 "key": "DiscountType",
// //                                 "value": "None"
// //                             },
// //                             {
// //                                 "key": "FareQuote",
// //                                 "value": "1191.42"
// //                             },
// //                             {
// //                                 "key": "FareQuoteAdjustmentAmount",
// //                                 "value": "0"
// //                             },
// //                             {
// //                                 "key": "UnitSupplierFee",
// //                                 "value": "0"
// //                             },
// //                             {
// //                                 "key": "UnitTax",
// //                                 "value": "17.6"
// //                             },
// //                             {
// //                                 "key": "ProgramCurrencyMinimumType",
// //                                 "value": "Numeric"
// //                             },
// //                             {
// //                                 "key": "ShortFallFactorType",
// //                                 "value": "Multiply"
// //                             },
// //                             {
// //                                 "key": "CrossOffFareQuote",
// //                                 "value": "0"
// //                             },
// //                             {
// //                                 "key": "PointCalculationFactor",
// //                                 "value": "0"
// //                             }
// //                         ],
// //                         "redemption": {
// //                             "id": "2551|7",
// //                             "name": "Pay in Cash",
// //                             "type": "Purchase",
// //                             "recommendation": {
// //                                 "fees": [
// //                                     {
// //                                         "cash": 0.0,
// //                                         "points": 0.0
// //                                     }
// //                                 ],
// //                                 "maxQuantity": 1,
// //                                 "cash": 1191.42,
// //                                 "points": 0.0
// //                             },
// //                             "isEligible": true,
// //                             "ruleSet": {
// //                                 "minimumPoints": 0.0,
// //                                 "maximumPoints": 0.0,
// //                                 "pointToCashFactor": {
// //                                     "value": 0.0,
// //                                     "operator": "Multiply"
// //                                 },
// //                                 "cashRoundingOff": 0.0,
// //                                 "pointStepSize": 1.0,
// //                                 "roundingType": "None"
// //                             },
// //                             "strikeoutValue": {
// //                                 "cash": 0.0,
// //                                 "points": 0.0
// //                             },
// //                             "actualValue": {
// //                                 "cash": 1191.42,
// //                                 "points": 0.0
// //                             },
// //                             "stateBag": [
// //                                 {
// //                                     "key": "IsTotalFareEquivalentToNetFare",
// //                                     "value": "False"
// //                                 },
// //                                 {
// //                                     "key": "RequiresBinValidation",
// //                                     "value": "False"
// //                                 },
// //                                 {
// //                                     "key": "RequiresOrderHistoryValidation",
// //                                     "value": "False"
// //                                 },
// //                                 {
// //                                     "key": "DiscountAmount",
// //                                     "value": "0"
// //                                 },
// //                                 {
// //                                     "key": "DiscountType",
// //                                     "value": "None"
// //                                 },
// //                                 {
// //                                     "key": "FareQuote",
// //                                     "value": "1191.42"
// //                                 },
// //                                 {
// //                                     "key": "FareQuoteAdjustmentAmount",
// //                                     "value": "0"
// //                                 },
// //                                 {
// //                                     "key": "UnitSupplierFee",
// //                                     "value": "0"
// //                                 },
// //                                 {
// //                                     "key": "UnitTax",
// //                                     "value": "17.6"
// //                                 },
// //                                 {
// //                                     "key": "ProgramCurrencyMinimumType",
// //                                     "value": "Numeric"
// //                                 },
// //                                 {
// //                                     "key": "ShortFallFactorType",
// //                                     "value": "Multiply"
// //                                 },
// //                                 {
// //                                     "key": "CrossOffFareQuote",
// //                                     "value": "0"
// //                                 },
// //                                 {
// //                                     "key": "PointCalculationFactor",
// //                                     "value": "0"
// //                                 }
// //                             ]
// //                         }
// //                     }
// //                 ]
// //             },
// //             "content": {
// //                 "rating": 3.0,
// //                 "geocode": {
// //                     "lat": 36.125218,
// //                     "long": -115.154841
// //                 },
// //                 "contact": {
// //                     "phones": [
// //                         {
// //                             "type": "Fax",
// //                             "number": "1-702-731-4005",
// //                             "countryCode": "US"
// //                         },
// //                         {
// //                             "type": "Work",
// //                             "number": "1-702-731-2020",
// //                             "countryCode": "US"
// //                         }
// //                     ],
// //                     "address": {
// //                         "city": {
// //                             "name": "Las Vegas"
// //                         },
// //                         "line1": "3500 Paradise Rd",
// //                         "line2": "",
// //                         "state": {
// //                             "code": "NV",
// //                             "name": "Nevada"
// //                         },
// //                         "countryCode": "US",
// //                         "postalCode": "89169"
// //                     }
// //                 },
// //                 "contentSupplierFamily": "epsrapid",
// //                 "imageSupplierFamily": "epsrapid",
// //                 "heroImage": {
// //                     "url": "https://clarifi-graphics.stage.cnxloyalty.com/fi/EPS/10805/9a20ceab_z.jpg",
// //                     "imageCaption": "Courtyard",
// //                     "imageCategory": "Exterior",
// //                     "horizontalResolution": 71.12,
// //                     "verticalResolution": 71.12,
// //                     "height": 750.0,
// //                     "width": 1000.0,
// //                     "attributes": {
// //                         "viewType": "Exterior",
// //                         "size": "Medium",
// //                         "quality": "High"
// //                     },
// //                     "isFeatured": false
// //                 },
// //                 "descriptions": [],
// //                 "activities": [],
// //                 "areaAttractions": [],
// //                 "policies": [],
// //                 "amenities": [],
// //                 "thumbnails": [],
// //                 "images": [],
// //                 "tripAdvisorReviews": {
// //                     "rating": 3.0,
// //                     "reviewCount": 1582
// //                 },
// //                 "tripAdvisor": {
// //                     "review": {
// //                         "rating": 3.0,
// //                         "reviewCount": 1582
// //                     },
// //                     "ranking": {
// //                         "rank": 147,
// //                         "rankOutOf": 267,
// //                         "category": "hotel",
// //                         "location": {
// //                             "city": "Las Vegas",
// //                             "state": "Nevada",
// //                             "countryCode": "US"
// //                         }
// //                     }
// //                 },
// //                 "trustYouInfo": {
// //                     "ratingInfo": {
// //                         "rating": 6.2,
// //                         "ratingDescription": "Poor"
// //                     },
// //                     "review": {
// //                         "reviewCount": 6743,
// //                         "reviewDescription": "Close to restaurants and bars with nearby parking areas. Great pool."
// //                     }
// //                 }
// //             },
// //             "distanceKm": 4.78,
// //             "recommendationScore": 0.0,
// //             "supplierId": "1i78x9q5d6pd",
// //             "refundability": "Refundable",
// //             "classicSupplierDetail": {
// //                 "id": "111",
// //                 "fareSourceName": "Hotelbeds"
// //             },
// //             "isHotelSoldOut": false,
// //             "isPrepaid": true
// //         },
// //             ],
// //                 "paging": {
// //                     "pageNo": 1,
// //                     "pageSize": 20,
// //                     "totalRecords": 115
// //                 }
// //       };
   
// //    service.searchresult.and.callFake(() => {
// //      return of(response);
// //    })
// //    sch.searchresult();
// //    fixture.detectChanges();
// //    expect(response.hasOwnProperty('sessionId')).toBe(true);
// //    expect(response.hasOwnProperty('hotels')).toBe(true);
// //    expect(response.hotels).toEqual(sch.finalresult);    
// //   });
// it('should be able to call searchresult ', fakeAsync( () => {

//     const sessionId = 'ye'


    
//     const searchresult = service.searchresult.and.returnValue(of({sessionId}))

//     const fixture = TestBed.createComponent(SearchComponentHotel);

//     const app = fixture.componentInstance;



//     app.searchresult()

//     tick()



//     expect(searchresult).toHaveBeenCalledTimes(1)



//     expect(app.finalresult).toBe(sessionId)

   

//   }))

// });









// // describe('SearchComponent', () => {
// //   let component: SearchComponentHotel;
// //   let fixture: ComponentFixture<SearchComponentHotel>;

// //   beforeEach(async () => {
// //     await TestBed.configureTestingModule({
// //       declarations: [ SearchComponentHotel ]
// //     })
// //     .compileComponents();

// //     fixture = TestBed.createComponent(SearchComponentHotel);
// //     component = fixture.componentInstance;
// //     fixture.detectChanges();
// //   });

// //   it('should create', () => {
// //     expect(component).toBeTruthy();
// //   });
// // });

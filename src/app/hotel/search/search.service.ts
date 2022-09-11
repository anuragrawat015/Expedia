import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { HotelcommonService } from '../hotelcommon.service';
import { MasterService } from 'src/app/service/master.service';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient,private parentservice:HotelcommonService,private superparent:MasterService) { }


  

   
   searchinit()
  {
    let apiurl="https://hotel-loyalty.stage.cnxloyalty.com/hotel/v1.0/search/init"
    let body={

      "currency": "USD",
  
      "searchQuery": {
  
          "roomOccupancy": {
  
              "occupants": [
  
                  {
  
                      "type": "Adult",
  
                      "age": 25
  
                  }
  
              ]
  
          },
  
          "stayPeriod": {
  
              "start": "2022-09-16T00:00:00",
  
              "end": "2022-09-21T00:00:00"
  
          },
  
          "bounds": {
  
              "circle": {
  
                  "center": {
  
                      "lat": 36.08333206176758,
  
                      "long": -115.16666412353516
  
                  },
  
                  "radiusKm": 50
  
              }
  
          }
  
      },
  
      "customerInfo": {
  
          "id": "123_UT",
  
          "transitCode": "e213c3e9-8376-4505-b413-adf0de74a6fd",
  
          "availablePointBalance": 1000000.0,
  
          "eligibilityInfo": {
  
              "programCurrency": "Points",
  
              "purchaseAllowed": true,
  
              "redemptionAllowed": true,
  
              "displayProgramCurrencyAsDecimal": false,
  
              "useVariableMilesFormula": false,
  
              "shortfallAllowed": true
  
          }
  
      },
  
      "programId": "1371"
  
  }
  
  let header = {

    'Content-type': 'application/json',
    'loyalty-userIp':'127.0.0.1',
    'loyalty-clientId':'123',
    'loyalty-correlationId':'cid1123',
    'cnx-userip':"127.0.0.1",
    'cnx-correlationId': "7bcee116-1b38-46c8-e858-03be00f0f991",
    'cnx-tenantId': "2pq3iaipudc",
    'cnx-environment-token':'SG',
    'Accept-Language':"en-US"

  }
  let demodate=body.searchQuery.stayPeriod.start
  for(let i=10;i<demodate.length;i++)
      this.superparent.pickupDate+=demodate[i]
  demodate=body.searchQuery.stayPeriod.end
  for(let i=10;i<demodate.length;i++)
      this.superparent.dropupDate+=demodate[i] 
  
  body.searchQuery.stayPeriod.start=this.superparent.pickupDate
  body.searchQuery.stayPeriod.end=this.superparent.dropupDate
  body.searchQuery.bounds.circle.center.lat=this.superparent.location_lat
  body.searchQuery.bounds.circle.center.long=this.superparent.location_lng
   
   return this.http.post(apiurl,body,{'headers':header})


  }

  searchstatus()
  {
    let apiurl="https://hotel-loyalty.stage.cnxloyalty.com/hotel/v1.0/search/status"
    
    let body={ 
      "sessionId" : this.parentservice.globalsessionid
      }
    let header={
      'Content-Type':'application/json',
      'cloyalty-correlationId':'test123', 
      'loyalty-userIp':'127.0.0.1',
      'loyalty-clientId':'123',
      'cnx-userIp':'127.0.0.1',
      'cnx-clientId':'123',
      'cnx-correlationId':'7bcee116-1b38-46c8-e858-03be00f0f991',
      'cnx-tenantId':'2pq3iaipudc',
      'cnx-environment-token':'SG'
    }
  return this.http.post(apiurl,body,{'headers':header})
  }


  searchresult()
  {
    //console.log("dance" + this.parentservice.globalsessionid)
    let apiurl="https://hotel-loyalty.stage.cnxloyalty.com/hotel/v1.0/search/results"

    let body={  
      "sessionId":this.parentservice.globalsessionid,
      "paging":{  
         "pageNo":1,
         "pageSize":20,
         "orderBy":"price asc"
      },
      "filters":{  
           "minHotelPrice": 1,
               "maxHotelPrice": 10000,
               "minHotelRating": 4,
               "maxHotelRating": 5,
               "hotelChains": []
      },
      "currency":"CAD",
      "contentPrefs":[  
         "All"
      ]
   }
   

 // console.log("helllo this "+ this.parentservice.globalsessionid)
  let header={
    'Content-Type':'application/json',
    'correlationId':'hotelloyaltytest3',
    'Accept-Language':'en-US',
    'loyalty-userIp':'127.0.0.1',
    'loyalty-clientId':'123',
    'cnx-userIp':'127.0.0.1',
    'cnx-clientId':'123',
    'cnx-correlationId':'7bcee116-1b38-46c8-e858-03be00f0f991',
    'cnx-tenantId':'2pq3iaipudc',
    'cnx-environment-token':'SG'
  }
  
  return this.http.post(apiurl,body,{'headers':header})


  }






}

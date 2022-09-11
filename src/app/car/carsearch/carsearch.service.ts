import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarcommonService } from '../carcommon.service';
import { MasterService } from 'src/app/service/master.service';
@Injectable({
  providedIn: 'root'
})
export class CarsearchService {

  constructor(private http:HttpClient,private parentservice:CarcommonService,private superparent:MasterService) { }
  
  
  // Create()
  // {
  //   let apiurl="https://transit-service.qa.cnxloyalty.com/api/v1.0/transitService/generateTransitCode"
  //   let body= {

  //                   "transitCodeRequest": {
  //                       "clientInformation": {
  //                         "clientId": "127",
  //                           "programId": "1371",
  //                           "programCode": "OCL BaseVarFTP2.0",
  //                           "clientUniqueID": "0217221d-4de0-0633-0354-7e332b72e08f"
  //                       },
                      
  //                       "clientEnvironmentToken": "T2",
  //                       "mode": "Simulator",
  //                       "requestedBy": "Rohit",
  //                       "userType": "Offline",
  //                       "lcid": "1033"
  //                   }
  
  //           }
  //   let header={'Content-Type':'application/json'}
  //   return this.http.post(apiurl,body,{'headers':header})
  // }

  searchinit()
  {
    let apiurl="https://car-loyalty.qa.cnxloyalty.com/car/v1.0/search/init"
    let body= {
                    "currency": "USD",
                    "searchQuery":{
                    "criteria": {
                      "pickUp": {
                        "circle": {
                          "center": {
                            "lat": 34.0103,
                            "long": -118.4963
                          },
                          "radiusKms": 10.5
                        },
                        "date": "2022-10-03",
                        "time": "10:30"
                      },
                      "dropOff": {
                        "sameAsPickup": false,
                        "circle": {
                          "center": {
                            "lat": 36.1147,
                            "long": -115.1728
                          },
                          "radiusKms": 10.5
                        },
                        "date": "2022-10-07",
                        "time": "17:30"
                      },
                      "driverInfo": {
                        "age": 25,
                        "nationality": "US"
                      }
                    },
                    "filters": {
                      "vendor": {
                        "allow": [],
                        "disallow": []
                      },
                      "vehicleType": {
                        "allow": [],
                        "disallow": []
                      },
                      "vehicleCategory": {
                        "allow": [],
                        "disallow": []
                      },
                      "price": {
                        "min": 20,
                        "max": 10000
                      },
                      "transmission": "Automatic",
                      "airConditionedOnly": true
                    }
                    },
                  "customerInfo":
                    {
                      "id":"Test",
                      "availablePointBalance":100000,
                      "transitCode":"452ee031-ce32-b66b-ab3d-dd643531384b",
                      "eligibilityInfo" : 
                      {
                        "programCurrency" : "Points", 
                          "purchaseAllowed" : true,
                          "redemptionAllowed" :true, 
                          "displayProgramCurrencyAsDecimal" : false, 
                          "useVariableMilesFormula" : false,  
                          "shortfallAllowed" : true
                      }
                    },
                    "programId":"1371"
                }
    let header={
      'Content-Type': 'application/json',
      'cnx-userip':'127.0.0.1',
      'cnx-tenantId':'2pu5zh4e9kw',
      'cnx-environment-token':'T2',
      'cnx-correlationId':'8f6aeee6-5575-4a5a-8387-ab8052641b17',
    };
    
    
    // body.searchQuery.criteria.pickUp.date=this.superparent.pickupDate
    // body.searchQuery.criteria.pickUp.time=this.superparent.pickupTime
    // body.searchQuery.criteria.dropOff.date=this.superparent.dropupDate
    // body.searchQuery.criteria.dropOff.time=this.superparent.dropupTime
    // body.searchQuery.criteria.pickUp.circle.center.lat=this.superparent.location_lat
    // body.searchQuery.criteria.pickUp.circle.center.long=this.superparent.location_lng
    // body.searchQuery.criteria.dropOff.circle.center.lat=this.superparent.drop_location_lat
    // body.searchQuery.criteria.dropOff.circle.center.long=this.superparent.drop_location_lng
    return this.http.post(apiurl,body,{'headers':header})
  }
  searchstatus()
  {
    let apiurl="https://car-loyalty.qa.cnxloyalty.com/car/v1.0/search/status"
    let body= {
                  "sessionId": this.parentservice.globalSessionId
              }
  
    let header={
                  'Content-Type':'application/json',
                  'cnx-userip':'127.0.0.1',
                  'cnx-tenantId':'2pu5zh4e9kw',
                  'cnx-environment-token':'T2',
                  'cnx-correlationId':'8f6aeee6-5575-4a5a-8387-ab8052641b17'
                }
    return this.http.post(apiurl,body,{'headers':header})
  }
  searchresult()
  {
    let apiurl="https://car-loyalty.qa.cnxloyalty.com/car/v1.0/search/results"
    let body= {
                  "sessionId": this.parentservice.globalSessionId,
                  "currency": "USD",
                  "paging": {
                    "pageNo": 1,
                    "pageSize": 15,
                    "orderBy": "rentalCompany asc,price asc"    
                  },
                  "contentPrefs": [
                    "All"
                  ],
                  "filters": {
                      "airConditionedOnly": false,
                    "vendor": {
                      "allow": [],
                      "disallow": []
                    },
                    "vehicleType": {
                      "allow": [],
                      "disallow": []
                    },
                    "vehicleCategory": {
                      "allow": [],
                      "disallow": []
                    },
                    "rentalIds":[],
                    "pickUpLocationType":["Neighborhood","Airport"],
                  "dropOffLocationType": ["Airport","Neighborhood"]   
                  },
                  "returnType":"Immediate"
    }
  
    let header={
                  'Content-Type':'application/json',
                  'cnx-userip':'127.0.0.1',
                  'cnx-tenantId':'2pu5zh4e9kw',
                  'cnx-environment-token':'T2',
                  'cnx-correlationId':'8f6aeee6-5575-4a5a-8387-ab8052641b17'
                }
    return this.http.post(apiurl,body,{'headers':header})
  }


}

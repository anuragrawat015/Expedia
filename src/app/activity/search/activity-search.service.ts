import { HttpClient ,HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MasterService } from "src/app/service/master.service";
import { CommonService } from "../common.service";



@Injectable({
    providedIn:'root'
})
export class ActivitySearchService{
    constructor(private http:HttpClient,private parentservice:CommonService,private superparent:MasterService) { }

    
    
    
    header=this.parentservice.header
    searchinit()
    {

        let apiurl="https://activity-loyalty.qa.cnxloyalty.com/activity/v1.0/search/init"
        let body={
            "searchQuery": {
                "dateRange": {
                    "from": "2023-02-01T08:10:55.714Z",
                    "to": "2023-02-20T08:11:55.714Z"
                },
                "bounds": {
                    "circle": {
                        "center": {
                            "lat": 33.39117,
                            "long": -118.4165
                        },
                        "radiusKm": 48
                    }
                },
                "paxNationality": "IN",
                "filters": {
                    "price": {},
                    "categories": [
                        "16",
                        "12",
                        "4",
                        "9"
                    ]
                }
            },
            "customerInfo": {
                "id": "AutoUser",
                "availablePointBalance": 50000,
                "transitCode": "ced9a5b5-5c35-674a-6621-744fec4f85cf",
                "eligibilityInfo": {
                    "programCurrency": "Points",
                    "purchaseAllowed": true,
                    "redemptionAllowed": true,
                    "displayProgramCurrencyAsDecimal": false,
                    "useVariableMilesFormula": false,
                    "shortfallAllowed": true
                }
            },
            "programId": "1371",
            "currency": "USD"
        }
        let demodate=body.searchQuery.dateRange.from
        for(let i=10;i<demodate.length;i++)
            this.superparent.pickupDate+=demodate[i]
        demodate=body.searchQuery.dateRange.to
        for(let i=10;i<demodate.length;i++)
            this.superparent.dropupDate+=demodate[i] 
        
        body.searchQuery.dateRange.from=this.superparent.pickupDate
        body.searchQuery.dateRange.to=this.superparent.dropupDate
        body.searchQuery.bounds.circle.center.lat=this.superparent.location_lat
        body.searchQuery.bounds.circle.center.long=this.superparent.location_lng
        console.log("hello")
        console.log(body.searchQuery.dateRange.from)
        console.log(body.searchQuery.dateRange.to)
        console.log(this.superparent.location_lat)
        console.log(this.superparent.location_lng)
       return this.http.post(apiurl,body,{'headers':this.header})
   
    }
    
    
      
    searchstatus()
    {
       let apiurl="https://activity-loyalty.qa.cnxloyalty.com/activity/v1.0/search/status"
       let body={"sessionId":this.parentservice.globalsessionid}
        return this.http.post(apiurl,body,{'headers':this.header})
    }
    
    searchresult()
    {
        let apiurl="https://activity-loyalty.qa.cnxloyalty.com/activity/v1.0/search/result"
        let body={
            "paging": {
              "pageNo": 1,
              "pageSize": 30,
              "orderBy": "price"
            },
            "sessionId": this.parentservice.globalsessionid,
            "currency": "USD"
          }
        
        return this.http.post(apiurl,body,{'headers':this.header})
    }
    
}
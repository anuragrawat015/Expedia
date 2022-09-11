import { HttpClient ,HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {of} from 'rxjs';
import { Wrap } from "../wrap";

@Injectable({
    providedIn:'root'
})
export class MasterService{

    
    pickupDate:any="2022-09-20"
    dropupDate:any="2022-09-25"
    pickupTime:any="10:00"
    dropupTime:any="10:00"

    location_lat:any=33.39117
    location_lng:any=-118.4165
    drop_location_lat:any=36.1147
    drop_location_lng:any=-115.1728
    apiurl="https://autosuggest-orxe-service.qa.cnxloyalty.com/api/autosuggest/v1.0/search"
   
       
    sessionID="6b3bf695-c753-477d-b85f-7b36b5b07ca8";
    token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbngtdGVuYW50SWQiOiIzZTFnbzRpbHhxOCIsImNueC1zZXNzaW9uaWQiOiI2YjNiZjY5NS1jNzUzLTQ3N2QtYjg1Zi03YjM2YjViMDdjYTgiLCJjbngtY29ycmVsYXRpb25JZCI6Ijg2Mzg3ODdkLTkzZDEtZTYzNC05ZWZlLTdjNmI3YTEyODk5NiIsIkNTUkYtVG9rZW4iOiJiMDE1NmQ4YS03OTI4LTQ2ZWQtYWI4MS1mNWMzMTQ3NzliNDEiLCJjbGllbnQtaWQiOiIxMDMiLCJwcm9ncmFtLWlkIjoiMTM4OSIsInByb2dyYW0tZ3JvdXAtaWQiOiI1MDgiLCJkZXZpY2UtdHlwZSI6Ik1vYmlsZSIsInBhcnRpY2lwYW50LWNvZGUiOiIxNDE3NTc3MCIsIm5iZiI6MTY2Mjg3NDczOCwiZXhwIjoxNjYyODc4MzM4LCJpYXQiOjE2NjI4NzQ3MzgsImlzcyI6Imh0dHBzOi8vb3J4ZS1hcGkucWEuY254bG95YWx0eS5jb20ifQ.SOepacPJtLjle7x45mavngPNqCLZ9czsouhuxcIWlZY";               
    clientID= "3e1go4ilxq8";
    
    constructor(private http:HttpClient)
    {

        
      

    }
    

    hello(data:any)
    {
        var header = {

            'content-type': 'application/json',
    
            "Authorization": 'Bearer ' + this.token,
    
            'cnx-sessionId': this.sessionID,
    
            'cnx-tenantId': this.clientID,
    
          }
        return this.http.post<Wrap>(this.apiurl,data,{'headers':header});
       // return this.http.post(this.apiurl,data,{'headers':header});
    }
}
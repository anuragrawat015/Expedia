import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivitySearchService } from './activity-search.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  initresult:any=null
  finalresult:any=null
  contentloaded:any=false
  constructor(private service: ActivitySearchService,private service1:CommonService)
  {
       
  }
  public responseSearchInit: any = {
    "sessionId": ""
  };
  private responseSearchStatus: any = {
    "status": "",
    "resultCount": 0,
    "errors" : []
  };

  payloadSearchResult : any = {  
    "paging": {
      "pageNo": 1,
      "pageSize": 30,
      "orderBy": "price"
    },
    "sessionId": "",
    "currency": "USD"
}
  ngOnInit(): void {
    
    this.searchinit()

  }

  


  
  searchinit()
  { 
      
      this.service.searchinit().subscribe((result:any)=>{
        this.service1.globalsessionid=result.sessionId
        this.searchstatus();
      });
  
    
 
      
  }
  delay(ms: any) {

    return new Promise(res => setTimeout(res, ms));

  }
 

  searchstatus()
  {
    this.service.searchstatus().subscribe(async(result:any)=>{
      
      console.log(result)
        if (result.status == 'Completed') {
          console.log("status completed")
          this.searchresult()

        } else if (result.status == 'InProgress') {

          
          await this.delay(5000);
          this.searchstatus()

        }
      
    });
  }
  // hello function ko result function ke upar likhna padega tabhi finalans value ki updated
  // value acces kar payega result function
  searchresult()
  {
    this.service.searchresult().subscribe((result:any)=>{
      this.finalresult=result.activities
      console.log(result)
      
    });
    this.contentloaded=true
  }

}

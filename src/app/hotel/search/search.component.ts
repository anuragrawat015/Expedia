import { Component, OnInit } from '@angular/core';
import { HotelcommonService } from '../hotelcommon.service';
import { SearchService } from './search.service';

@Component({
  selector: 'app-searchhotel',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponentHotel implements OnInit {

  contentLoaded:boolean;
  initresult:any=null
  finalresult:any=null
  constructor(private service:SearchService,private parentservice:HotelcommonService) { 
    this.contentLoaded = false;
  }
  public responseSearchInit: any = {
    "sessionId": ""
  };
  ngOnInit(): void {

       
      //this.searchinit();
      

  }
  searchinit()
  {
      this.service.searchinit().subscribe((result:any)=>{
      this.parentservice.globalsessionid=result.sessionId
      this.searchstatus()
    })
  }
 



  delay(ms: any) {

    return new Promise(res => setTimeout(res, ms));

  }
  searchstatus()
  {
    this.service.searchstatus().subscribe(async (result:any)=>
      {
        //console.log(result)
        if (result.status == 'Completed') {
          //console.log("status completed")
          this.searchresult()

        } else if (result.status == 'InProgress') {

          
          await this.delay(5000);
          this.searchstatus()

        }
        
      })
  }
  searchresult()
  {
    //console.log("result session id "+this.parentservice.globalsessionid)
      this.service.searchresult().subscribe((result:any)=>
      {
        this.parentservice.flag="true"
      this.finalresult=result.hotels
      
      })
      this.contentLoaded = true;

  }

}

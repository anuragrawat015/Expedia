import { Component, OnInit } from '@angular/core';
import { CarcommonService } from '../carcommon.service';
import { CarsearchService } from './carsearch.service';

@Component({
  selector: 'app-carsearch',
  templateUrl: './carsearch.component.html',
  styleUrls: ['./carsearch.component.css']
})
export class CarsearchComponent implements OnInit {

    constructor(private service:CarsearchService,private parentservice:CarcommonService) { }
    finalresult:any
    contentLoaded:any=false
    public responseSearchInit: any = {
      "sessionId": ""
    };
    ngOnInit(): void {

        
        
      this.searchinit()

    }

    // Create()
    // {
    //   this.service.Create().subscribe((result:any)=>{
    //     //console.log("helo")
    //     console.log(result)
    //     //this.parentservice.transitCode=result.transitCode
    //     //this.searchinit()
    //   })
    // }
    searchinit()
    {
        this.service.searchinit().subscribe((result:any)=>{
        console.log(result)
        this.parentservice.globalSessionId=result.sessionId
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
          console.log(result)
          if (result.status == 'Completed') {
            console.log("status completed")
            this.searchresult()

          } else if (result.status == 'InProgress') {

            
            await this.delay(5000);
            this.searchstatus()

          }
          
        })
    }
    searchresult()
    {
      
      this.service.searchresult().subscribe((result:any)=>
        {
          
          this.finalresult=result.vehicles
          console.log(this.finalresult)
          this.contentLoaded=true
        })
       

    }

}

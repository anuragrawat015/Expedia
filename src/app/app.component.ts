import { Component ,OnInit } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { MasterService } from './service/master.service';
import { Carautosuggest } from './carautosuggest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Expedia';
  
  // data : Carautosuggest[]|undefined;
  // data1=[1,2,3]
  // constructor(private service: MasterService)
  // {
       
  // }
  // getVal(val:any)
  // {
      
  //     console.warn(val.target.value)
  // }
  // getAns(event:any)
  // {
  //   console.log(event.target.value)
  //   if(event.target.value!="")
  //   {
  //     let data={
  //       "sq": {
  //         "st": event.target.value,
  //         "sf": [
  //           "airport",
  //           "city"
  //         ]
  //       },
  //       "sel": true,
  //       "rec": 20,
  //       "c": "cars"
  //     }
  //     this.service.hello(data).subscribe(result=>{
        
  //       this.service.location_lat=result.s[0].lat
  //       this.service.location_lng=result.s[0].lng
      
  //       console.log(this.service.location_lat)
  //       console.log(this.service.location_lng)
  //       this.data = result.s;
  //      // console.log(result.s)
  //       //this.data=angular.toJson();
  //       //console.log(typeof result);
  //       //console.log(result)
  //     });
  //   }
    
 
      
  // }

}

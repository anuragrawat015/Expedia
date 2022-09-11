import { Component, OnInit } from '@angular/core';
import { MasterService } from '../service/master.service';
import { Carautosuggest } from '../carautosuggest';

@Component({
  selector: 'app-home-page-search-card',
  templateUrl: './home-page-search-card.component.html',
  styleUrls: ['./home-page-search-card.component.css']
})

export class HomePageSearchCardComponent {
  
  
  locations:LocationObject[]=[]
  pickuplocations:LocationObject[]=[]
  droplocations:LocationObject[]=[]

  pickupDate:any
  dropupDate:any
  pickupTime:any
  dropupTime:any
  data : Carautosuggest[]|undefined;
  data1:any=""
  runAutoAPI:any=false
  pickup_locations_loaded:boolean=false
  drop_locations_loaded:boolean=false
  selected_drop_locationId:any=""
  pickup_location_input:any=""
  drop_location_input:any=""
  constructor(private service: MasterService)
  {
       
  }
  chooseLocation(data:any,flag:string){
    

    if(flag=="pickup"){
      

      this.pickup_locations_loaded=false;
      this.selected_drop_locationId=data.id;
      this.pickup_location_input=this.locations[data.id].airport_code+this.locations[data.id].city_name;
      this.service.location_lat=this.locations[data.id].latitude
      this.service.location_lng=this.locations[data.id].longitude
    }
    else
    {
      this.drop_locations_loaded=false;
      this.selected_drop_locationId=data.id;
      this.drop_location_input=this.locations[data.id].airport_code+this.locations[data.id].city_name;
      this.service.drop_location_lat=this.locations[data.id].latitude
      this.service.drop_location_lng=this.locations[data.id].longitude
    }

    

  }
  // valchange(event:any)
  // {
    
  //   this.runAutoAPI=true
  //   console.log("auto suggest will not workk")
   
  //   console.log()
  // }
  // getVal(event:any)
  // {
  //     console.log(this.pickupDate)
  //     console.warn("clinked")
  // }
  setVal()
  {
      this.service.pickupDate=this.pickupDate
      this.service.dropupDate=this.dropupDate
     // console.log(this.service.pickupDate)
      //console.log(this.service.dropupDate)
  }
  setVal1()
  {
    this.service.pickupTime=this.pickupTime
      this.service.dropupTime=this.dropupTime
      console.log(this.service.pickupTime)
      console.log(this.service.dropupTime)
  }
  getAns(event:any,flag:string)
  {

    console.log(event.target.value)

    if(event.target.value.length>=3)
    {
      let data={
        "sq": {
          "st": event.target.value,
          "sf": [
            "airport",
            "city"
          ]
        },
        "sel": true,
        "rec": 20,
        "c": "cars"
      }
      this.service.hello(data).subscribe((result:any)=>{
        
        let i=0;



        this.locations=result.s.map((place:any)=>{

          return {

            "key":i++,

            "city_name":place.cn,

            "latitude":place.lat,

            "longitude":place.lng,

            "country":place.c,

            "airport_name":place.d,

            "airport_code":place.n,

          }

        });
        // this.service.location_lat=result.s[0].lat
        // this.service.location_lng=result.s[0].lng
      
        console.log(this.service.location_lat)
        console.log(this.service.location_lng)
        this.data = result.s;
        if(flag=='drop')
        this.drop_locations_loaded=true
        else
        this.pickup_locations_loaded=true
       
      });
    }
    
 
      
  }

}
interface LocationObject{

  key:string,

  city_name:string,

  latitude:number,

  longitude:number,

  country:string,

  airport_name:string,

  airport_code:string

}
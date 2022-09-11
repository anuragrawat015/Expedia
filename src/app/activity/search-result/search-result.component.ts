import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private parentservice:CommonService) { }

  ngOnInit(): void {
      

    
    

  }
  
  
  // getresult()
  // {
  //   //console.log(this.parentservice.getsearchresult().activities)
  //   if(this.parentservice.flag=="true")
  //   return this.parentservice.getsearchresult().activities
  //   else
  //   return []
  // }

}

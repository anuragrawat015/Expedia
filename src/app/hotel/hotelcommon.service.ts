import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelcommonService {
  
  searchresult:any
  flag:any="false"
  globalsessionid:any=""
  
  constructor() { }
}

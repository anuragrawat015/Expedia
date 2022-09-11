import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { SearchresultComponentHotel } from './searchresult/searchresult.component';
import { SearchComponentHotel } from './search/search.component';



@NgModule({
  declarations: [
    SearchComponentHotel,
    // SearchresultComponentHotel
  ],
  imports: [
    CommonModule
  ],
  exports:[SearchComponentHotel]
})
export class HotelModule { }

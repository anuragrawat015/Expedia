import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
// import { DetailComponent } from './detail/detail.component';
// import { OptionComponent } from './option/option.component';
// import { PriceComponent } from './price/price.component';
// import { BookComponent } from './book/book.component';
// import { CancelComponent } from './cancel/cancel.component';
import { SearchResultComponent } from './search-result/search-result.component';




@NgModule({
  declarations: [
    SearchComponent,
    SearchResultComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[SearchComponent,SearchResultComponent]
})
export class ActivityModule { }

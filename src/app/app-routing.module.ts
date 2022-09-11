import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './activity/search/search.component';
import { CarsearchComponent } from './car/carsearch/carsearch.component';
import { HomePageSearchCardComponent } from './home-page-search-card/home-page-search-card.component';
import { SearchComponentHotel } from './hotel/search/search.component';

const routes: Routes = [
  
    { path: '', component: HomePageSearchCardComponent },
    { path: 'activitysearch', component:SearchComponent},
    { path: 'hotelsearch', component: SearchComponentHotel },
    { path: 'carsearch', component: CarsearchComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

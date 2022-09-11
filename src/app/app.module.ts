import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './activity/search/search.component';
import { ActivityModule } from './activity/activity.module';
import { HotelModule } from './hotel/hotel.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageSearchCardComponent } from './home-page-search-card/home-page-search-card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarModule } from './car/car.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageSearchCardComponent,
    HeaderComponent,
    FooterComponent,
  
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ActivityModule,
    HotelModule,
    BrowserAnimationsModule,
    CarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[AppComponent]
})
export class AppModule { }

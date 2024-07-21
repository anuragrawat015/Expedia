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

        
      const HOLIDAY_PACKAGES = [
        { 
          id: "1",
          source: 'New York',
          destination: 'Paris',
          departureDate: '2024-08-01',
          returnDate: '2024-08-15',
          flights: [
            { id: 1, airline: 'Air France', flightNumber: 'AF123' },
            { id: 2, airline: 'Delta Airlines', flightNumber: 'DL456' }
          ],
          hotels: [
            { id: 1, name: 'Hotel Le Meurice', stars: 5 },
            { id: 2, name: 'Hotel Lutetia', stars: 5 }
          ],
          activities: [
            { id: 1, name: 'Eiffel Tower Tour', duration: '2 hours' },
            { id: 2, name: 'Louvre Museum', duration: '4 hours' }
          ]
        }
        // Add more packages as needed
      ];
      
      this.finalresult = HOLIDAY_PACKAGES
      this.contentLoaded=true

    }

}

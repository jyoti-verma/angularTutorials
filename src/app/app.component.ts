import { Component, inject } from '@angular/core';
import { Housinglocation } from './housinglocation';
import { HousingService } from './housing.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);

constructor() {
  this.housingLocationList = this.housingService.getAllHousingLocations();
}
}


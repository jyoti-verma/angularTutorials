import { Component, Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component {
  @Input() housingLocation!: Housinglocation;
}

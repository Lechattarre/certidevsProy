import { Component } from '@angular/core';
import { restaurant.model} from 'restaurant'
import { from } from 'rxjs';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {

  restaurant: restaurant[] = [
      {
        id: 1,
        
      }
  ]; 

}

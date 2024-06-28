import { Component } from '@angular/core';
import { ListviewComponent } from '../listview/listview.component';
import { Dog } from '../../dog/Dog';

@Component({
  selector: 'mm-detailedview',
  templateUrl: './detailedview.component.html',
  styleUrl: './detailedview.component.scss'
})
export class DetailedviewComponent {
  selectedDog? : Dog = ListviewComponent.selectedDog


}

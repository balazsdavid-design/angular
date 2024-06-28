import { Component } from '@angular/core';
import { DOGS } from '../../dog/dogs';
import { NgFor } from '@angular/common';
import { Dog } from '../../dog/Dog';

@Component({
  selector: 'mm-listview',
  templateUrl: './listview.component.html',
  styleUrl: './listview.component.scss',
  
})
export class ListviewComponent {
  dogs = DOGS;

  
  static selectedDog? : Dog;
  onSelect(dog : Dog){
    ListviewComponent.selectedDog = dog;
    open("localhost:4200/dogs")
    
  }

}


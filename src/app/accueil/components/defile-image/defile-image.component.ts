import { Component } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider/public_api';
import { Image } from '../../models/images';
@Component({
  selector: 'app-defile-image',
  templateUrl: './defile-image.component.html',
  styleUrls: ['./defile-image.component.scss']
})
export class DefileImageComponent
 {
    image!: Image[];
    ngOnInit ()
    {
      this.image = 
      [
        {
          imageUrl : 'C:\Users\CUSTOMER PC\Cmr-Trip\src\app\accueil\components\defile-image\Bimbia.jpeg'
        },
        {
          imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSe3MGwvIiNlV8l9AsSXwyory7Jg1-CYCiSA&usqp=CAU'
        },
        {
          imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpVrpEhUY92uxZ66-Es5xJLCvttJu5qRfgrw&usqp=CAU'
        },
        {
          imageUrl : 'https://www.femmexpat.com/wp-content/uploads/2013/02/FemmExpat-OK-14.jpg'
        },
      ];

    }

 }

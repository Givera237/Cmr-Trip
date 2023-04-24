import { Component } from '@angular/core';

@Component({
  selector: 'app-defile-image',
  templateUrl: './defile-image.component.html',
  styleUrls: ['./defile-image.component.scss']
})
export class DefileImageComponent
 {
  name = 'Angular';
  image = [{
      image: 'https://www.ouestmedias.net/wp-content/uploads/2022/12/-29.jpg',
      thumbImage: 'https://www.ouestmedias.net/wp-content/uploads/2022/12/-29.jpg',
      title: 'OUEST CAMEROUN'
  }, {
      image: 'https://www.cityzeum.com/images/wikimedia/kribi.webp?ezimgfmt=ngcb1/notWebP',
      thumbImage: 'https://www.cityzeum.com/images/wikimedia/kribi.webp?ezimgfmt=ngcb1/notWebP',
      title: 'Plage de KRIBI CAMEROUN'
  }, {
      image: 'https://content.r9cdn.net/rimg/dimg/86/3d/4e8a3494-ctry-42-16cd7eef08d.jpg?width=1366&height=768&xhint=1610&yhint=1173&crop=true',
      thumbImage: 'https://content.r9cdn.net/rimg/dimg/86/3d/4e8a3494-ctry-42-16cd7eef08d.jpg?width=1366&height=768&xhint=1610&yhint=1173&crop=true',
      title: 'KAYAK CAMEROUN'
  },{
      image: 'https://www.bouger-voyager.com/wp-content/uploads/2021/10/mont-cameroun.jpg',
      thumbImage: 'https://www.bouger-voyager.com/wp-content/uploads/2021/10/mont-cameroun.jpg',
      title: 'Mont CAMEROUN'
  }, {
      image: 'https://i.pinimg.com/originals/7a/49/58/7a49589989b9ff08597be225a6de57c7.jpg',
      thumbImage: 'https://i.pinimg.com/originals/7a/49/58/7a49589989b9ff08597be225a6de57c7.jpg',
      title: 'Site éco-touristique EBOGO'
  }, {
      image: 'https://www.bouger-voyager.com/wp-content/uploads/2021/10/ekom.jpg',
      thumbImage: 'https://www.bouger-voyager.com/wp-content/uploads/2021/10/ekom.jpg',
      title: 'Chute EKOM.'
  },
  {
    image: 'https://discover-cameroon.com/wp-content/uploads/2021/02/Pouss-au-Cameroun.jpg',
    thumbImage: 'https://discover-cameroon.com/wp-content/uploads/2021/02/Pouss-au-Cameroun.jpg',
    title: 'RHUMSIKI CAMEROUN'
}
];
}

 

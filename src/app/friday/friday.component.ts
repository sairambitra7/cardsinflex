import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friday',
  templateUrl: './friday.component.html',
  styleUrls: ['./friday.component.css']
})
export class FridayComponent implements OnInit {

  data:any;

  constructor() {
    this.getData();
   }

  ngOnInit() {
  }

  getData(){
    this.data={
      overview: [
        {
          header:"Special title treatment",
          imagesrc:"../assets/facebook.png",
          imagealt:"facebook",
          list:"With supporting text below as a natural lead-in to additional content,With supporting text below as a natural lead-in to additional content,With supporting text below as a natural lead-in to additional content.",

        },
        {
          header:"Special title treatment",
          imagesrc:"../assets/facebook.png",
          imagealt:"facebook",
          list:"With supporting text below as a natural lead-in to additional content,With supporting text below as a natural lead-in to additional content,With supporting text below as a natural lead-in to additional content.",

        },
        {
          header:"Special title treatment",
          imagesrc:"../assets/facebook.png",
          imagealt:"facebook",
          list:"With supporting text below as a natural lead-in to additional content,With supporting text below as a natural lead-in to additional content,With supporting text below as a natural lead-in to additional content.",

        },
        {
          header:"Special title treatment",
          imagesrc:"../assets/facebook.png",
          imagealt:"facebook",
          list:"With supporting text below as a natural lead-in to additional content,With supporting text below as a natural lead-in to additional content,With supporting text below as a natural lead-in to additional content.",

        }
      ]

}
  }
}
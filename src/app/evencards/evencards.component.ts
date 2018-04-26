import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evencards',
  templateUrl: './evencards.component.html',
  styleUrls: ['./evencards.component.css']
})
export class EvencardsComponent implements OnInit {
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
          header:"Strategy",
          imagesrc:"../assets/facebook.png",
          imagealt:"facebook",
          list:"With supporting text below as a natural lead-in to additional content,With supporting text below as a natural lead-in to additional content,With supporting text below as a natural lead-in to additional content.",

        },
        {
          
          imagesrc:"../assets/corporate.jpg",
          imagealt:"corporate",
          

        },
        
        
      ]
    

    }
  }
}



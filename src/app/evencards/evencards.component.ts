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
          iconsrc:"../assets/facebook.png",
          iconalt:"facebook",
          imagesrc:"../assets/corporate.jpg",
          imagealt:"corporate",
          list:["Marketing Anaysis","Audience","Profiling","Brand Identity","Communication"],
        },
        
        
      ]


    }
  }
}



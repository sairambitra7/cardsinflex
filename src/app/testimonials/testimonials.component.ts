import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  data:any;
  constructor() {
    this.getData();
   }

  ngOnInit() {
  }
  getData(){
    this.data={
      testimonials:[
        {
        imagepath: "../assets/captain.png",
          imagesrc: "",
          avatarpath: "",
          avatarscr: "",
          list: "Tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh tawshif is a web designer.",
        },
        {
          imagepath: "../assets/captain.png",
            imagesrc: "",
            avatarpath: "",
            avatarscr: "",
            list: "Tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh tawshif is a web designer.",
          },
          {
            imagepath: "../assets/captain.png",
              imagesrc: "",
              avatarpath: "",
              avatarscr: "",
              list: "Tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh tawshif is a web designer.",
            }
      ]
    }
  }
}

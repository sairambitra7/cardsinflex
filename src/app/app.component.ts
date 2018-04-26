import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  cardData:any[] = [];
  data:any = {}
  constructor() {
 
  }
  getData() {
    this.data = {
      cards: [
        {
          title: "Tawshif Ahsan Khan",
          imagepath: "../assets/image.png",
          imagesrc: "",
          avatarpath: "/assets/image.png",
          avatarscr: "",
          para: "Tawshif is a web designer living in Bangladesh.",
        },
        {
          title: "Tawshif Ahsan",
          imagepath: "../assets/image.png",
          imagesrc: "",
          avatarpath: "/assets/image.png",
          avatarsrc: "",
          para: "Tawshif is a web designer living in Bangladesh.",
        },
        {
          title: " Ahsan Khan",
          imagepath: "../assets/image.png",
          imagesrc: "",
          avatarpath: "/assets/image.png",
          avatarsrc: "",
          para: "Tawshif is a web designer living in Bangladesh.",
        },
        {
          title: "Tawshif",
          imagepath: "../assets/image.png",
          imagesrc: "",
          avatarpath: "/assets/image.png",
          avatarsrc: "",
          para: "Tawshif is a web designer living in Bangladesh.",
        },
        {
          title: " Ahsan Khan",
          imagepath: "../assets/image.png",
          imagesrc: "",
          avatarpath: "/assets/image.png",
          avatarsrc: "",
          para: "Tawshif is a web designer living in Bangladesh.",
        },
        {
          title: "Tawshif",
          imagepath: "../assets/image.png",
          imagesrc: "",
          avatarpath: "/assets/image.png",
          avatarscr: "",
          para: "Tawshif is a web designer living in Bangladesh.",
        },

      ]
    }
  }
  ngOnInit(){
    this.getData()
    this.cardData=this.data.cards
    console.log(this.cardData)
 
  }
}

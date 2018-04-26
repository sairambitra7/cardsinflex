import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardco',
  templateUrl: './cardco.component.html',
  styleUrls: ['./cardco.component.css']
})
export class CardcoComponent implements OnInit {

  data:any;

  constructor() { 
    this.getData();
  }

  ngOnInit() {
  }

  getData(){
    this.data={
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

}

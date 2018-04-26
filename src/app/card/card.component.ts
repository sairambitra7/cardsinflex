import { Component, OnInit, Input,SimpleChange, SimpleChanges } from '@angular/core';
import { NgOnChangesFeature } from '@angular/core/src/render3';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() inputData:any;
cardData:any;

  constructor() { 
    // this.getData();
  }
  ngOnChanges(change:{[key:string]:SimpleChange}){
      if (change.hasOwnProperty("inputData")){
        this.cardData=JSON.parse(JSON.stringify(this.inputData))
        if(this.cardData){
          this.doService(this.cardData)
        }
      }
  }
  

  doService(cardList:any[]){
    this.cardData=cardList;
  }


  ngOnInit() {
    console.log(this.inputData)
    
  }

}

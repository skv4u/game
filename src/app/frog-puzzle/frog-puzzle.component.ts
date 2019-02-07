import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frog-puzzle',
  templateUrl: './frog-puzzle.component.html',
  styleUrls: ['./frog-puzzle.component.css']
})
export class FrogPuzzleComponent implements OnInit {
list:string[] = ['right.png','right.png','right.png','blank.jpg','left.png','left.png','left.png'];
masterList:string[] = ['right.png','right.png','right.png','blank.jpg','left.png','left.png','left.png'];

imagePath:string = './assets/images/frog/';

  constructor() { }

  ngOnInit() {
  }
  move(name:string,index:number){
    // console.log(name,index);
    if(name == 'blank.jpg') return;
    if(name == 'right.png'){
      if(this.list[index + 1] == 'blank.jpg'){
        this.swapList(index,index + 1);
      }
      else if(this.list[index + 2] == 'blank.jpg'){
        this.swapList(index,index + 2);
      }
    }
    else if(name == 'left.png'){
      if(this.list[index - 1] == 'blank.jpg'){
        this.swapList(index,index - 1);
      }
      else if(this.list[index - 2] == 'blank.jpg'){
        this.swapList(index,index - 2);
      }
    }
  }
  swapList(index1,index2){
    let temp:string = this.list[index1];
    this.list[index1] = this.list[index2];
    this.list[index2] = temp;
  }
  start(){
    this.list = JSON.parse(JSON.stringify(this.masterList));
  }
}

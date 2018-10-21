import { Component, OnInit } from '@angular/core';
import { CommonService } from './../shared/common.service';


@Component({
  selector: 'app-arrange-number',
  templateUrl: './arrange-number.component.html',
  styleUrls: ['./arrange-number.component.css'],
  providers: [CommonService]

})
export class ArrangeNumberComponent implements OnInit {

  numberList: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "X"];
  indexList: any = {
    "0": [1, 3],
    "1": [0, 2, 4],
    "2": [1, 5],
    "3": [0, 4, 6],
    "4": [1, 3, 5, 7],
    "5": [2, 4, 8],
    "6": [3, 7],
    "7": [4, 6, 8],
    "8": [5, 7]

  }
  classList: string[] = ["btn-primary", "btn-danger", "btn-success", "btn-warning", "btn-info"];
  dataList: any[] = [];
  constructor(private cs: CommonService) { }


  ngOnInit() {
    this.suffleNumbers();

  }
  suffleNumbers() {
    let shuffleNumbers = this.cs.shuffle(this.numberList);
    // let shuffleClasses = this.cs.shuffle(this.classList);
    let list: any[] = [];
    for (let m in shuffleNumbers) {
      if (shuffleNumbers[m] == 'X')
        list.push({
          "name": shuffleNumbers[m],
          "index": this.indexList[Number(m)],
          "class": 'btn-default'
        })
      else
        list.push({
          "name": shuffleNumbers[m],
          "index": this.indexList[Number(m)],
          "class": this.classList[Number(m) % this.classList.length]
        })

    }
    this.dataList = list;
    console.log(this.dataList);

  }
  swapNumber(el: any, currentIndex: number) {
    console.log(el);
    for (let m in el.index) {
      // console.log(this.dataList[m].name)
      if (this.dataList[el.index[m]].name == 'X') {
        this.swapList(el.index[m], currentIndex);
        break;
      }
    }
  }
  swapList(index1: number, index2: number) {
    // console.log(index1,index2)
    let temp: any = this.dataList[index1];
    this.dataList[index1] = this.dataList[index2];    
    this.dataList[index2] = temp;

    // console.log(index1,index2)
    // console.log(this.indexList);

// console.log(this.indexList['"'+index1+'"']);
    this.dataList[index1].index = this.indexList[index1];
    this.dataList[index2].index = this.indexList[index2];

console.log(this.dataList);

  }
  start(){
    this.suffleNumbers();
  }
}

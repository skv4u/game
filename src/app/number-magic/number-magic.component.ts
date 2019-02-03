import { Component, OnInit } from '@angular/core';
import { CommonService } from './../shared/common.service';

@Component({
  selector: 'app-number-magic',
  templateUrl: './number-magic.component.html',
  styleUrls: ['./number-magic.component.css'],
  providers: [CommonService]

})
export class NumberMagicComponent implements OnInit {
  MAX_NUMBER: number = 63;
  BOX_COUNT = 6;
  numberList: any[] = [];
  GuessNumber: number = 0;
  dataList: any[] = [];
  constructor(private cs: CommonService) { }
  ngOnInit() {
    let x: number = 1;
    for (let i = 1; i <= this.BOX_COUNT; i++) {
      this.numberList.push({ "isActive": false, "numberList": this.arrangeNumber(i, x) });
      x = x * 2;
    }
    this.dataList = JSON.parse(JSON.stringify(this.numberList));
  }
  arrangeNumber(index: number, start: number) {
    let list: number[] = [];
    let save: number = start;
    if (index == 0) {
      while (start <= this.MAX_NUMBER) {
        list.push(start);
        start = start + 2;
      }
    }
    else {
      while (start <= this.MAX_NUMBER) {
        if (list.length && list.length % save == 0) {
          start = start + save;
        }
        list.push(start);
        start++;
      }
    }
    return list;
  }
  answer() {
    let num: number = 0;
    for (let m of this.dataList) {
      if (m.isActive) {
        num += m.numberList[0]
      }
    }
    this.GuessNumber = num;
  }
  reset() {
    this.GuessNumber = 0;
    this.dataList = JSON.parse(JSON.stringify(this.numberList));
  }
}
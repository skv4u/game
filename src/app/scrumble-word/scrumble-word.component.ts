import { Component, OnInit } from '@angular/core';
import { CommonService } from './../shared/common.service';
import { WORDLIST } from './../shared/word-list.const';

@Component({
  selector: 'app-scrumble-word',
  templateUrl: './scrumble-word.component.html',
  styleUrls: ['./scrumble-word.component.css'],
  providers: [CommonService]
})
export class ScrumbleWordComponent implements OnInit {
  WORDLIST = WORDLIST;
  dataList:any[]=[];
  constructor(public cs: CommonService) { }

  ngOnInit() {
    // console.log(WORDLIST);
    this.shufflewords();
  }
  shufflewords() {
    let shuffleList = this.cs.shuffle(WORDLIST);
    shuffleList = shuffleList.slice(1, 10);
    this.dataList = this.shuffledString(shuffleList);
    console.log(this.dataList);
  }
  shuffledString(arraylist: any) {
    let list:any[]=[];
    for (let m of arraylist) {
      let a = m.split(""),
        n = a.length;

      for (let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
      }
      // m = a.join("");
      list.push({
        'actual':m.toUpperCase(),
        'scrumble':a.join("").toUpperCase(),
        'underscoreLength':new Array(m.length),
        'userInput':""
      });
    }
    return list;
  }
  maxLengthValidate(elem:any,len:number,text:string){
    console.log(len);
    console.log(text);
  }
}



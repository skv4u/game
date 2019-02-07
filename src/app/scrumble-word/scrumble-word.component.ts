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
  idCounter:number = 0;
  isValidate:boolean = false;
  constructor(public cs: CommonService) { }

  ngOnInit() {
    // console.log(WORDLIST);
    this.shufflewords();
  }
  shufflewords() {
    let shuffleList = this.cs.shuffle(WORDLIST);
    shuffleList = shuffleList.slice(1, 11 );
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
        'wordList':this.newArray(m.length),
        'userInput':"",
        'IsCorrect':false
      });
    }
    return list;
  }
  newArray(size:number){
    let list:any[] = [];
    for(let i=0; i<size; i++){
      list.push({"char":"",
      "idCounter":this.idCounter++});
    }
    return list;
  }
  maxLengthValidate(elem:any,len:number,text:string){
    // elem.preventDefault();
    // console.log(len,text.length);
    // return false;
    if(text.length >= len)
      return false;
    return true;
  }
//   nextFocus(elem:any, index:number){
//     console.log(elem);
//     // let e = window.event.which || event.keyCode
//     //console.log(elem.keyCode);
//  if(elem.keyCode < 40) return;
   
//   }
  
  restrictKey(elem:any,index:number){
    // console.log(elem.keyCode);
    let keyCodeList:number[]=[32];  
    if(keyCodeList.indexOf(elem.keyCode) !== -1) return false;
    if(elem.keyCode == 8){
      index--;
      if(document.getElementById('input'+index))
      document.getElementById('input'+index).focus();
      return true;
    }
    setTimeout(()=>{
      index++;
      if(document.getElementById('input'+index))
      document.getElementById('input'+index).focus();

    },1)
    return true;
  }
  validate(){
    this.isValidate = true;
    for(let m of this.dataList){
      let inputword = this.getWordString(m.wordList);
      if(inputword == m.actual.toLowerCase()){
        m.IsCorrect = true;
      }
      else {
        m.IsCorrect = false;
      }
    }
    // console.log(this.dataList);
  }
  getWordString(word:any){
    return word.map((v)=>{
      return v.char
    }).join("");
  }
  start(){
    
  }
}



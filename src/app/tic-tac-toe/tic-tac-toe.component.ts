import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {
  systemSymbol: string = 'X';
  userSymbol: string = "0";
  blank: string = "";
  list: any[] = new Array(9).fill(this.blank);
  isSystemStart: boolean = false;
  systemIndexList: number[] = [];
  userIndexList: number[] = [];
  isUserStart: boolean = false;
  isSolved: boolean = false;

  isUserTurn: boolean = false;
  isSystemTurn: boolean = false;
  pairedGroup: any = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
  ];

  msg: any = {
    message: "",
    isVisible: false,
    class: ''
  }
  constructor() { }

  ngOnInit() {
    // this.list[1] = "X";
    console.log(this.list);
  }

  systemturn() {

  }
  systemstart() {
    this.reset();
    this.isSystemStart = true;
    let index = Math.floor(Math.random() * 8);
    this.list[index] = this.systemSymbol;
    this.isUserTurn = true;
    this.systemIndexList.push(index);
  }
  userstart() {
    this.isUserStart = true;
    this.list[0] = 'X';

    // this.user_turn

  }
  removeMessage() {
    setTimeout(() => {
      this.msg = {
        message: "",
        isVisible: false,
        class: ''
      }
    }, 5000);
  }
  filllist(index: number) {
    // this.user_turn = false;
    if (!this.isSystemStart && !this.isUserStart) {
      // alert("Please select System/User start")
      this.msg = {
        isVisible: true,
        class: '',
        message: 'Please Click Start to play'
      }
      this.removeMessage();
      return;
    }
    else if (this.list[index] !== "") {
      return;
    }
    else if (this.isSolved) {
      return;
    }
    if (this.isUserTurn) {
      // console.log(index);
      this.list[index] = this.userSymbol;
      this.userIndexList.push(index);
      /* System logic */
      if (!this.IsWon(false)) {

        let i: number = this.getSystemIndexTofill();
        this.list[i] = this.systemSymbol;
        let is_tie = this.IsTie();
        if (is_tie) {
          // alert("Its Draw !");
          this.msg = {
            isVisible: true,
            class: '',
            message: 'Its Draw!'
          }
          this.removeMessage();

          return;
        }
        this.systemIndexList.push(i);
        this.IsWon(true);
      }

    }

  }
  getSystemIndexTofill() {

    // Check for possible match

    let flag: boolean = false;
    let combination: any = [...this.pairedGroup];
    let index = 0;
    for (let comb of combination) {
      let count: number = 0;
      for (let m of comb) {
        if (this.list[m] == this.systemSymbol) {
          count++;
        }
      }
      if (count == 2) {
        for (let m of comb) {
          if (this.list[m] != this.systemSymbol && this.list[m] == "") {
            flag = true;
            index = m;
            break;
          }
        }
      }
      if (flag) break;
    }
    if (flag) return index;
    return this.getRandomNumber();
  }

  getRandomNumber() {
    let randomNum: number = 0;
    // console.log(this.systemIndexList);
    // console.log(this.userIndexList);
    for (let x = 0; x < 1000; x++) {
      randomNum = Math.floor(Math.random() * 8);
      if (this.systemIndexList.indexOf(randomNum) == - 1 && this.userIndexList.indexOf(randomNum) == - 1) {
        break;
      }
      // console.log(Math.random())
    }
    // console.log(randomNum)
    return randomNum;
  }

  IsWon(isSystem: boolean) {
    let combination: any = [...this.pairedGroup];
    let msg = 'You have won, Hurray!  You';
    let msgcls = 'success';
    
    if (isSystem) {
      msg = "Try Again !!!";
      msgcls = 'lose';
    }

    let isSolved: boolean = false;
    for (let com of combination) {
      if (this.list[com[0]] != "" && this.list[com[0]] == this.list[com[1]] && this.list[com[1]] == this.list[com[2]]) {
        isSolved = true;
        setTimeout(() => {
          this.isSolved = true;
          // alert("Solved")
          this.msg = {
            isVisible: true,
            class: msgcls,
            message: msg
          }
          // this.removeMessage();
        }, 1);
        break;
      }
    }
    return isSolved;
  }
  IsTie() {
    return this.list.every(v => v != "");
  }

  reset() {
    this.isSystemStart = false;
    this.isUserStart = false;
    this.isSolved = false;
    this.systemIndexList = []
    this.userIndexList = [];
    this.msg = {
      message: "",
      isVisible: false,
      class: ''
    }
    this.list = this.list.map(v => "")
  }
}

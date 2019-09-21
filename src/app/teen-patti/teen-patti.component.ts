import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-teen-patti',
  templateUrl: './teen-patti.component.html',
  styleUrls: ['./teen-patti.component.css'],
  providers: [CommonService]
})

export class TeenPattiComponent implements OnInit {

  cards: any[] = [];
  // user1:any[]=[
  //   { "name": "A", "type": "laalpan", "priority": 1, "symbol": "&hearts;" },
  //   { "name": "Q", "type": "chidiya", "priority": 3, "symbol": "&clubs;" },
  //   { "name": "J", "type": "chidiya", "priority": 4, "symbol": "&clubs;" }
  // ];
  cardName: string[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  cardType: string[] = ['C', 'D', 'H', 'S'];
  cardPriority: any = { "2": "02", "3": "03", "4": "04", "5": "05", "6": "06", "7": "07", "8": "08", "9": "09", "10": "10", "J": "11", "Q": "12", "K": "13", "A": "14" };
  userA: any[] = [];
  userB: any[] = [];
  path: string = "./assets/images/teenpatti/";
  card52: any[] = new Array(52);
  shuffleClass: string = "";
  isSuffling: boolean = false;
  isShow: boolean = false;
  selectedTheme: string = "./assets/images/teenpatti/red_back.png";
  startAmount:number = 5;
  isStartBidVisible:boolean = true;
  amount:any = {
    "userA" : [],
    "userB" : []
  }
  mainBalance:any = {
    "userA" : 1000,
    "userB" : 1000
  };
  userAInput:string = "5";
  userBInput:string = "5";
  winner:any = {
    userA : false,
    userB:false
  }
  constructor(private commonService: CommonService) { }


  ngOnInit() {
    // this.startGame();
  }
  startGame(){
    this.shuffleClass = "";    
    this.suffleTheme();
    this.cards = this.createCards();
    this.cards = this.commonService.shuffle(this.cards);
    // console.log(this.cards);
    setTimeout(() => {
      this.shuffleClass = "suffle-91";
      setTimeout(() => {
        this.userA = this.cards.splice(1, 3);
        this.userB = this.cards.splice(4, 3);
        this.isSuffling = false;
        this.amount.userA.push(this.startAmount);
        this.amount.userB.push(this.startAmount);
        this.mainBalance.userA -= this.startAmount;
        this.mainBalance.userB -= this.startAmount;
        this.isStartBidVisible = false;
      }, 500);

    }, 200);
  }
  createCards() {
    let list: any[] = [];
    for (let name of this.cardName) {
      for (let type of this.cardType) {

        list.push({
          "card": name + type + '.png',
          "priority": this.cardPriority[name],
          "type": type
        });
      }
    }
    list = this.commonService.shuffle(list);
    return list;
  }
  suffleTheme() {
    let themeList: string[] = [
      "./assets/images/teenpatti/blue_back.png",
      "./assets/images/teenpatti/gray_back.png",
      "./assets/images/teenpatti/green_back.png",
      "./assets/images/teenpatti/purple_back.png",
      "./assets/images/teenpatti/red_back.png",
      "./assets/images/teenpatti/yellow_back.png"
    ];
    themeList = this.commonService.shuffle(themeList);
    this.selectedTheme = themeList[0];
  }
  bett(user:string){
    // console.log(this.userAInput)
    // console.log(this.userBInput)
    // if(user == 'B')
    
    this.amount.userB.push(this.userBInput)
    this.mainBalance.userB = this.mainBalance.userB - Number(this.userBInput);

   
    // else
    this.systemBid();
  }
  systemBid(){
    setTimeout(()=>{
      this.amount.userA.push(this.userBInput);

      this.mainBalance.userA = this.mainBalance.userA - Number(this.userBInput);
    },2000);
  }

}

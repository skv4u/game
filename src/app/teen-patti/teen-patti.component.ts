import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teen-patti',
  templateUrl: './teen-patti.component.html',
  styleUrls: ['./teen-patti.component.css']
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
  path: string = "./assets/images/teenpatti/";
  card52: any[] = new Array(52);
  shuffleClass: string = "";
  constructor() { }

  ngOnInit() {
    this.cards = this.createCards();
    console.log(this.cards);
    setTimeout(() => {
      this.shuffleClass = "suffle-91";
      setTimeout(() => {
        this.shuffleClass = "";
        setTimeout(() => {
          this.shuffleClass = "suffle-91";
          setTimeout(() => {
            this.shuffleClass = "";
          }, 700)
        }, 700)
      }, 700);
    }

      , 200)
  }
  createCards() {
    let list: any[] = [];
    for (let name of this.cardName) {
      for (let type of this.cardType) {
        list.push({
          "card": name + type + '.png'
        });
      }
    }
    return list;
  }

}

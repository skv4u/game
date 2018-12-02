import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-call-break',
  templateUrl: './call-break.component.html',
  styleUrls: ['./call-break.component.css'],
  providers:[CommonService]
})
export class CallBreakComponent implements OnInit {

  cards: any[] = [
    { "name": "2", "type": "laalpan","priority":13 },
    { "name": "2", "type": "kalapan","priority":13 },
    { "name": "2", "type": "thikri","priority":13 },
    { "name": "2", "type": "chidiya","priority":13 },

    { "name": "3", "type": "laalpan","priority":12 },
    { "name": "3", "type": "kalapan","priority":12 },
    { "name": "3", "type": "thikri","priority":12 },
    { "name": "3", "type": "chidiya","priority":12 },

    { "name": "4", "type": "laalpan","priority":11 },
    { "name": "4", "type": "kalapan","priority":11 },
    { "name": "4", "type": "thikri","priority":11 },
    { "name": "4", "type": "chidiya","priority":11 },

    { "name": "5", "type": "laalpan","priority":10 },
    { "name": "5", "type": "kalapan","priority":10 },
    { "name": "5", "type": "thikri","priority":10 },
    { "name": "5", "type": "chidiya","priority":10 },

    { "name": "6", "type": "laalpan","priority":9 },
    { "name": "6", "type": "kalapan","priority":9 },
    { "name": "6", "type": "thikri","priority":9 },
    { "name": "6", "type": "chidiya","priority":9 },

    { "name": "7", "type": "laalpan","priority":8 },
    { "name": "7", "type": "kalapan","priority":8 },
    { "name": "7", "type": "thikri","priority":8 },
    { "name": "7", "type": "chidiya","priority":8 },

    { "name": "8", "type": "laalpan","priority":7 },
    { "name": "8", "type": "kalapan","priority":7 },
    { "name": "8", "type": "thikri","priority":7 },
    { "name": "8", "type": "chidiya","priority":7 },

    { "name": "9", "type": "laalpan","priority":6 },
    { "name": "9", "type": "kalapan","priority":6 },
    { "name": "9", "type": "thikri","priority":6 },
    { "name": "9", "type": "chidiya","priority":6 },

    { "name": "10", "type": "laalpan","priority":5 },
    { "name": "10", "type": "kalapan","priority":5 },
    { "name": "10", "type": "thikri","priority":5 },
    { "name": "10", "type": "chidiya","priority":5 },

    { "name": "J", "type": "laalpan","priority":4 },
    { "name": "J", "type": "kalapan","priority":4 },
    { "name": "J", "type": "thikri","priority":4 },
    { "name": "J", "type": "chidiya","priority":4 },

    { "name": "Q", "type": "laalpan","priority":3 },
    { "name": "Q", "type": "kalapan","priority":3 },
    { "name": "Q", "type": "thikri","priority":3 },
    { "name": "Q", "type": "chidiya","priority":3 },

    { "name": "K", "type": "laalpan","priority":2 },
    { "name": "K", "type": "kalapan","priority":2 },
    { "name": "K", "type": "thikri","priority":2 },
    { "name": "K", "type": "chidiya","priority":2 },

    { "name": "A", "type": "laalpan","priority":1 },
    { "name": "A", "type": "kalapan", "priority":1 },
    { "name": "A", "type": "thikri", "priority":1 },
    { "name": "A", "type": "chidiya", "priority":1 }
  ];
  user1: any[] = [];
  user2: any[] = [];
  user3: any[] = [];
  user4: any[] = [];
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    console.log(this.cards.length);
    this.suffleCards();

  }
  suffleCards() {
    // for (let i in this.cards) {
    //   let j = Math.floor(Math.random() * (Number(i) + 1));
    //   let tmp = this.cards[i];
    //   this.cards[i] = this.cards[j];
    //   this.cards[j] = tmp;
    // }
    this.cards = this.commonService.shuffle(this.cards);
   
    let user1:any[] = this.cards.slice(0,13);
    let user2:any[] = this.cards.slice(13,26);
    let user3:any[] = this.cards.slice(26,39);
    let user4:any[] = this.cards.slice(39,52);
   user1 = this.commonService.genericSort(user1,'type');
   user1 = this.subSort(user1);
    user2 = user2.sort((a, b) => a.type - b.type);
    user3 = user3.sort((a, b) => a.type - b.type);
    user4 = user4.sort((a, b) => a.type - b.type);
    this.user1 = user1;
    this.user2 = user2;
    this.user3 = user3;
    this.user4 = user4;
   
    // this.cards = this.cards.sort(a,b,function(){})
    // this.cards = this.cards.sort((a, b) => a.type - b.type);
    // console.log(this.cards);

  }
  subSort(list:any[]){
    let tempList:any[]=[];
    let finalList:any[]=[];
    let sequenceList = ["thikri","chidiya","laalpan","kalapan"];
    
    for(let seq of sequenceList){
      tempList = [];
      for(let m of list){
        if(seq == m.type){
          tempList.push(m);
        }
      }
      if(tempList.length){
        tempList = this.commonService.genericSort(tempList,'priority');
      }
      finalList = finalList.concat(tempList);
    }

    return finalList;
  }
  selectCard(card:any){
    console.log(card);
  }

}

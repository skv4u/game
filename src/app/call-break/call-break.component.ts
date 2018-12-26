import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-call-break',
  templateUrl: './call-break.component.html',
  styleUrls: ['./call-break.component.css'],
  providers: [CommonService]
})
export class CallBreakComponent implements OnInit {

  cards: any[] = [
    { "name": "2", "type": "laalpan", "priority": 13, "symbol": "&hearts;" },
    { "name": "2", "type": "kalapan", "priority": 13, "symbol": "&spades;" },
    { "name": "2", "type": "thikri", "priority": 13, "symbol": "&diams;" },
    { "name": "2", "type": "chidiya", "priority": 13, "symbol": "&clubs;" },

    { "name": "3", "type": "laalpan", "priority": 12, "symbol": "&hearts;" },
    { "name": "3", "type": "kalapan", "priority": 12, "symbol": "&spades;" },
    { "name": "3", "type": "thikri", "priority": 12, "symbol": "&diams;" },
    { "name": "3", "type": "chidiya", "priority": 12, "symbol": "&clubs;" },

    { "name": "4", "type": "laalpan", "priority": 11, "symbol": "&hearts;" },
    { "name": "4", "type": "kalapan", "priority": 11, "symbol": "&spades;" },
    { "name": "4", "type": "thikri", "priority": 11, "symbol": "&diams;" },
    { "name": "4", "type": "chidiya", "priority": 11, "symbol": "&clubs;" },

    { "name": "5", "type": "laalpan", "priority": 10, "symbol": "&hearts;" },
    { "name": "5", "type": "kalapan", "priority": 10, "symbol": "&spades;" },
    { "name": "5", "type": "thikri", "priority": 10, "symbol": "&diams;" },
    { "name": "5", "type": "chidiya", "priority": 10, "symbol": "&clubs;" },

    { "name": "6", "type": "laalpan", "priority": 9, "symbol": "&hearts;" },
    { "name": "6", "type": "kalapan", "priority": 9, "symbol": "&spades;" },
    { "name": "6", "type": "thikri", "priority": 9, "symbol": "&diams;" },
    { "name": "6", "type": "chidiya", "priority": 9, "symbol": "&clubs;" },

    { "name": "7", "type": "laalpan", "priority": 8, "symbol": "&hearts;" },
    { "name": "7", "type": "kalapan", "priority": 8, "symbol": "&spades;" },
    { "name": "7", "type": "thikri", "priority": 8, "symbol": "&diams;" },
    { "name": "7", "type": "chidiya", "priority": 8, "symbol": "&clubs;" },

    { "name": "8", "type": "laalpan", "priority": 7, "symbol": "&hearts;" },
    { "name": "8", "type": "kalapan", "priority": 7, "symbol": "&spades;" },
    { "name": "8", "type": "thikri", "priority": 7, "symbol": "&diams;" },
    { "name": "8", "type": "chidiya", "priority": 7, "symbol": "&clubs;" },

    { "name": "9", "type": "laalpan", "priority": 6, "symbol": "&hearts;" },
    { "name": "9", "type": "kalapan", "priority": 6, "symbol": "&spades;" },
    { "name": "9", "type": "thikri", "priority": 6, "symbol": "&diams;" },
    { "name": "9", "type": "chidiya", "priority": 6, "symbol": "&clubs;" },

    { "name": "10", "type": "laalpan", "priority": 5, "symbol": "&hearts;" },
    { "name": "10", "type": "kalapan", "priority": 5, "symbol": "&spades;" },
    { "name": "10", "type": "thikri", "priority": 5, "symbol": "&diams;" },
    { "name": "10", "type": "chidiya", "priority": 5, "symbol": "&clubs;" },

    { "name": "J", "type": "laalpan", "priority": 4, "symbol": "&hearts;" },
    { "name": "J", "type": "kalapan", "priority": 4, "symbol": "&spades;" },
    { "name": "J", "type": "thikri", "priority": 4, "symbol": "&diams;" },
    { "name": "J", "type": "chidiya", "priority": 4, "symbol": "&clubs;" },

    { "name": "Q", "type": "laalpan", "priority": 3, "symbol": "&hearts;" },
    { "name": "Q", "type": "kalapan", "priority": 3, "symbol": "&spades;" },
    { "name": "Q", "type": "thikri", "priority": 3, "symbol": "&diams;" },
    { "name": "Q", "type": "chidiya", "priority": 3, "symbol": "&clubs;" },

    { "name": "K", "type": "laalpan", "priority": 2, "symbol": "&hearts;" },
    { "name": "K", "type": "kalapan", "priority": 2, "symbol": "&spades;" },
    { "name": "K", "type": "thikri", "priority": 2, "symbol": "&diams;" },
    { "name": "K", "type": "chidiya", "priority": 2, "symbol": "&clubs;" },

    { "name": "A", "type": "laalpan", "priority": 1, "symbol": "&hearts;" },
    { "name": "A", "type": "kalapan", "priority": 1, "symbol": "&spades;" },
    { "name": "A", "type": "thikri", "priority": 1, "symbol": "&diams;" },
    { "name": "A", "type": "chidiya", "priority": 1, "symbol": "&clubs;" }
  ];
  user1: any[] = [];
  user2: any[] = [];
  user3: any[] = [];
  user4: any[] = [];
  eachUserCardCount = [
    { "count": 1, "isSelected": false },
    { "count": 2, "isSelected": false },
    { "count": 3, "isSelected": false },
    { "count": 4, "isSelected": false },
    { "count": 5, "isSelected": false },
    { "count": 6, "isSelected": false },
    { "count": 7, "isSelected": false },
    { "count": 8, "isSelected": false },
    { "count": 9, "isSelected": false },
    { "count": 10, "isSelected": false },
    { "count": 11, "isSelected": false },
    { "count": 12, "isSelected": false },
    { "count": 13, "isSelected": false }
  ];
  selectedTheme: string = "./assets/images/cardback.jpg";
  blankCard: string = "./assets/images/cards/blank.png";
  currentList: any[] = [];
  isBidVisible: boolean = true;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    // console.log(this.cards.length);
    this.suffleCards();
    this.suffleTheme();
  }
  suffleTheme() {
    let themeList: string[] = [
      "./assets/images/cardback.jpg",
      "./assets/images/cardback_blue.jpg",
      "./assets/images/cardback_red_blue.jpg",
      "./assets/images/cardback_red1.png"
    ];
    themeList = this.commonService.shuffle(themeList);
    this.selectedTheme = themeList[0];
  }
  suffleCards() {
    // for (let i in this.cards) {
    //   let j = Math.floor(Math.random() * (Number(i) + 1));
    //   let tmp = this.cards[i];
    //   this.cards[i] = this.cards[j];
    //   this.cards[j] = tmp;
    // }
    this.cards = this.commonService.shuffle(this.cards);
    let user1: any[] = this.cards.slice(0, 13);
    let user2: any[] = this.cards.slice(13, 26);
    let user3: any[] = this.cards.slice(26, 39);
    let user4: any[] = this.cards.slice(39, 52);
    user1 = this.commonService.genericSort(user1, 'type');
    user1 = this.subSort(user1);

    user2 = this.commonService.genericSort(user2, 'type');
    user2 = this.subSort(user2);

    user3 = this.commonService.genericSort(user3, 'type');
    user3 = this.subSort(user3);

    user4 = this.commonService.genericSort(user4, 'type');
    user4 = this.subSort(user4);

    this.user1 = user1;
    this.user2 = user2;
    this.user3 = user3;
    this.user4 = user4;

    // console.log(this.user1);
    // this.cards = this.cards.sort(a,b,function(){})
    // this.cards = this.cards.sort((a, b) => a.type - b.type);
    // console.log(this.cards);

  }
  subSort(list: any[]) {
    let tempList: any[] = [];
    let finalList: any[] = [];
    let sequenceList = ["thikri", "chidiya", "laalpan", "kalapan"];

    for (let seq of sequenceList) {
      tempList = [];
      for (let m of list) {
        if (seq == m.type) {
          tempList.push(m);
        }
      }
      if (tempList.length) {
        tempList = this.commonService.genericSort(tempList, 'priority');
      }
      finalList = finalList.concat(tempList);
    }
    return finalList;
  }
  selectCard(card: any, user: string) {
    // console.log(card);
    // this.currentList = [
    //   { "name": "2", "type": "laalpan", "priority": 13, "symbol": "&hearts;" },
    //   { "name": "2", "type": "kalapan", "priority": 13, "symbol": "&spades;" },
    //   { "name": "2", "type": "thikri", "priority": 13, "symbol": "&diams;" },
    //   { "name": "2", "type": "chidiya", "priority": 13, "symbol": "&clubs;" }
    // ];
    card["user"] = user;
    let currentList: any[] = [card];

    this.user4 = this.removeCard(this.user4, card);


    let systemCard: any = this.selectSingleCardToPlay(card, this.user3, currentList);
    systemCard["user"] = "user3";
    currentList.push(systemCard);
    this.user3 = this.removeCard(this.user3, systemCard);

    systemCard = this.selectSingleCardToPlay(card, this.user1, currentList);
    systemCard["user"] = "user1";
    currentList.push(systemCard);
    this.user1 = this.removeCard(this.user1, systemCard);


    systemCard = this.selectSingleCardToPlay(card, this.user2, currentList);
    systemCard["user"] = "user2";
    currentList.push(systemCard);
    this.user2 = this.removeCard(this.user2, systemCard);

    this.currentList = currentList;

    // console.log(currentList);
    setTimeout(() => {
      this.winnerData();
    }, 2000);

  }
  winnerLogList: any[] = [];
  userStat = {
    "handCount": {
      "user1": 0,
      "user2": 0,
      "user3": 0,
      "user4": 0
    },
    "bidCount": {
      "user1": 0,
      "user2": 0,
      "user3": 0,
      "user4": 0
    }
  }
  winnerData() {
    let winner = this.selectTopPriorityCard(this.currentList);
    // console.log(winner.user);
    this.winnerLogList.push(winner);
    this.userStat[winner.user]++;

  }

  removeCard(list: any, rmcard: any) {
    // console.log(list,rmcard)
    return list.filter(v => !(rmcard.name == v.name && rmcard.type == v.type))
  }

  selectSingleCardToPlay(currentCard: any, cards: any, currentList: any) {
    let list: any[] = [];
    let priority: number[];
    // if (currentList.length) {
    // priority = currentList.filter(v => v.priority);
    list = cards.filter(v => v.type == currentCard.type);

    if (list.length == 0) {
      //card Not available user trump card
      return this.selectLastPriorityCard(cards);
    }
    else {
      let flag: boolean = this.isTopperCardAvailable(list, currentList);
      // console.log(list);
      if (flag) {
        return this.selectTopPriorityCard(list);
      }
      else {
        return this.selectLastPriorityCard(list);
      }
    }
    // } else {
    //   priority = [currentCard.priority];
    //   list = cards.filter(v => v.type == currentCard.type);
    //   if (list.length == 0) {
    //     //card Not available user trump card
    //   }
    //   else {
    //     list = this.selectTopPriorityCard(list);

    //   }
    // }
    // return list;
  }
  isTopperCardAvailable(list: any, currentList: any) {
    let flag: boolean = false;
    // console.log(list,currentList);
    let topestCardFromCurrentList = this.selectTopPriorityCard(currentList);
    for (let m of list) {
      if (m.priority < topestCardFromCurrentList.priority) {
        return true;
      }
    }
    return false;
  }

  selectTopPriorityCard(list: any) {
    let top: any = list[0];
    for (let i = 1; i < list.length; i++) {
      if (top.priority > list[i].priority) {
        top = list[i];
      }
    }
    return top;
  }
  selectLastPriorityCard(list: any) {
    let top: any = list[0];
    for (let i = 1; i < list.length; i++) {
      if (top.priority < list[i].priority) {
        top = list[i];
      }
    }
    return top;
  }
  userBidSelection(index: number) {
    for (let m of this.eachUserCardCount) {
      m.isSelected = false;
    }
    this.eachUserCardCount[index].isSelected = true;
  }
  // user4Bid:number;
  userBid() {
    for (let m of this.eachUserCardCount) {
      if (m.isSelected) {
        this.userStat.bidCount.user4 = m.count;
        break;
      }
    }
    // console.log(this.user4Bid)
    this.userStat.bidCount.user3 = this.systemBid(this.user3);
    this.userStat.bidCount.user1 = this.systemBid(this.user1);
    this.userStat.bidCount.user2 = this.systemBid(this.user2);
    this.isBidVisible = false;
    console.log(this.userStat);
  }
  systemBid(list: any) {
    console.log(list);
    let count: number = 0;
    let tempList: any[] = [];
    let finalList: any[] = [];
    let sequenceList = ["thikri", "chidiya", "laalpan", "kalapan"];

    for (let seq of sequenceList) {
      tempList = [];
      for (let m of list) {
        if (seq == m.type) {
          tempList.push(m);
        }
      }
      if (tempList.length) {
        count = count + this.getSystemCountCardWise(tempList);
      }

    }
    return count == 0 ? 1 : count;
  }
  getSystemCountCardWise(tempList) {
    let count: number = 0;
    for (let m of tempList) {
      if (m.priority == 1 || m.priority == 2) {
        count++;
      }
    }
    return count;
  }
}

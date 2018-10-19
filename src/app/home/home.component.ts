import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
gameList:any[]=[
  {"ID":1,"Name":"Memory Game","Description":"Memory Game with flip flop, which will track users memory power","Likes":8,"Dislikes":4,"Comments":10,"Image":"./../assets/images/blank.jpg","URL":"/memory-game"},
  {"ID":2,"Name":"Arrange Number","Description":"Arrange Number puzzle, Quick thinker","Likes":8,"Dislikes":4,"Comments":10,"Image":"./../assets/images/blank.jpg","URL":"arrange-number"},
  {"ID":3,"Name":"Scrumble word","Description":"Scrumble word to find the correct word","Likes":8,"Dislikes":4,"Comments":10,"Image":"./../assets/images/blank.jpg","URL":"scrumble-word"},
  {"ID":4,"Name":"Frog Puzzle","Description":"Frog Puzzle with flip flop, which will track users memory power","Likes":8,"Dislikes":4,"Comments":10,"Image":"./../assets/images/blank.jpg","URL":"frog-puzzle"},
  {"ID":5,"Name":"Snakes","Description":"Memory Game with flip flop, which will track users memory power","Likes":8,"Dislikes":4,"Comments":10,"Image":"./../assets/images/blank.jpg","URL":"memory-game"},
  {"ID":6,"Name":"Call Break","Description":"Memory Game with flip flop, which will track users memory power","Likes":8,"Dislikes":4,"Comments":10,"Image":"./../assets/images/blank.jpg","URL":"memory-game"},
  {"ID":7,"Name":"Teen Patti","Description":"Memory Game with flip flop, which will track users memory power","Likes":8,"Dislikes":4,"Comments":10,"Image":"./../assets/images/blank.jpg"}
]
  constructor(public router: Router) { }

  ngOnInit() {
  }
  naviateToURL(url:string){
    this.router.navigate([url]);
  }

}

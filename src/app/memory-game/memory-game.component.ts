import { Component, OnInit } from '@angular/core';
import { CommonService } from './../shared/common.service';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.css'],
  providers:[CommonService]
})
export class MemoryGameComponent implements OnInit {

  blankList: any[] = [
    'q.png', 'q.png', 'q.png', 'q.png', 'q.png', 'q.png', 'q.png', 'q.png', 'q.png', 'q.png', 'q.png', 'q.png'
  ];
  imageList: any[] = [
    'car.png', 'heart.png', 'mobile.png', 'sleeper.png', 'umbrella.png','tree.png','car.png', 'heart.png', 'mobile.png', 'sleeper.png', 'umbrella.png','tree.png'
  ];
  saved:string='';
  savedIndex:number = 0;
  // rows:number[]=[1,2,]
  dataList:any[]=[];
  shuffleImageList: string[] = [];
  imagePath:string = './assets/images/memory/';
  constructor(private cs:CommonService) { }

  ngOnInit() {
    this.listShuffleImageList();
  }
  listShuffleImageList() {
    let suffledList:string[]=this.cs.shuffle(this.imageList);
   
    
    this.dataList = this.makeAllHideShow(suffledList,true,false);
  }
  makeAllHideShow(suffledList:any,blankVisible:boolean,imageVisible:boolean){
    let list:any[]=[];
    let j:number = 0;
    for(let i=0; i<suffledList.length/3; i++){
      list.push({
        "blank":"q.png",
        "IsBlank1Visible":blankVisible,
        "IsBlank2Visible":blankVisible,
        "IsBlank3Visible":blankVisible,
        "image1":suffledList[j++],
        "IsImage1Visible":imageVisible,        
        "image2":suffledList[j++],
        "IsImage2Visible":imageVisible,        
        "image3":suffledList[j++],
        "IsImage3Visible":imageVisible,
        "IsNone1Visible":false,
        "IsNone2Visible":false,       
        "IsNone3Visible":false        
      })
    }
    return list;
  }
  visibleImage(img:string,index:number){
    // this.dataList[index].IsBlankVisible = false;
    if(this.saved != ''){
      setTimeout(()=>{
        this.setVisibility(img,index)
      },600)
    //  return;
    }
    if(this.saved == ''){
      
      this.saved = img;
      this.savedIndex = index;
    }
    if(img == 'image1'){
      this.dataList[index].IsImage1Visible = true;
      this.dataList[index].IsBlank1Visible = false;     
    }
    else if(img == 'image2'){
      this.dataList[index].IsImage2Visible = true;
      this.dataList[index].IsBlank2Visible = false;     

    }    
    else if(img == 'image3'){
      this.dataList[index].IsImage3Visible = true;
      this.dataList[index].IsBlank3Visible = false;
    }
  
    
    console.log(this.dataList);
    
  }
  setVisibility(img:string,index:number){
    // console.log(this.dataList[this.savedIndex][this.saved] , this.dataList[index][img])
    // debugger
    if(this.dataList[this.savedIndex][this.saved] == this.dataList[index][img]){
      if(img == 'image1'){
        this.dataList[index].IsImage1Visible = false;
        this.dataList[index].IsBlank1Visible = false;
        this.dataList[index].IsNone1Visible = true;
      }
      else if(img == 'image2'){
        this.dataList[index].IsImage2Visible = false;
        this.dataList[index].IsBlank2Visible = false;
        this.dataList[index].IsNone2Visible = true; 
      }    
      else if(img == 'image3'){
        this.dataList[index].IsImage3Visible = false;
        this.dataList[index].IsBlank3Visible = false;
        this.dataList[index].IsNone3Visible = true;
      }

      if(this.saved == 'image1'){
        this.dataList[this.savedIndex].IsImage1Visible = false;
        this.dataList[this.savedIndex].IsBlank1Visible = false;
        this.dataList[this.savedIndex].IsNone1Visible = true;
      }
      else if(this.saved == 'image2'){
        this.dataList[this.savedIndex].IsImage2Visible = false;
        this.dataList[this.savedIndex].IsBlank2Visible = false;
        this.dataList[this.savedIndex].IsNone2Visible = true; 
      }    
      else if(this.saved == 'image3'){
        this.dataList[this.savedIndex].IsImage3Visible = false;
        this.dataList[this.savedIndex].IsBlank3Visible = false;
        this.dataList[this.savedIndex].IsNone3Visible = true;
      }
    }
    else{
      if(this.saved == 'image1'){
        this.dataList[this.savedIndex].IsImage1Visible = false;
        this.dataList[this.savedIndex].IsBlank1Visible = true;
        // this.dataList[this.savedIndex].IsNone1Visible = true;
      }
      else if(this.saved == 'image2'){
        this.dataList[this.savedIndex].IsImage2Visible = false;
        this.dataList[this.savedIndex].IsBlank2Visible = true;
        // this.dataList[this.savedIndex].IsNone2Visible = true;
      }
      else if(this.saved == 'image3'){
        this.dataList[this.savedIndex].IsImage3Visible = false;
        this.dataList[this.savedIndex].IsBlank3Visible = true;
        // this.dataList[this.savedIndex].IsNone3Visible = true;
      }

      if(img == 'image1'){
        this.dataList[index].IsImage1Visible = false;
        this.dataList[index].IsBlank1Visible = true;     
      }
      else if(img == 'image2'){
        this.dataList[index].IsImage2Visible = false;
        this.dataList[index].IsBlank2Visible = true;     
  
      }    
      else if(img == 'image3'){
        this.dataList[index].IsImage3Visible = false;
        this.dataList[index].IsBlank3Visible = true;
      }
    }
      this.saved = '';
      this.savedIndex =0;
    
  }
  start(){
    this.saved = '';
    this.savedIndex =0;
    let suffledList:string[]=this.cs.shuffle(this.imageList);     
     this.dataList = this.makeAllHideShow(suffledList,false,true);
     setTimeout(()=>{
      this.dataList = this.makeAllHideShow(suffledList,true,false);
      
     },3000)
  }
  

}

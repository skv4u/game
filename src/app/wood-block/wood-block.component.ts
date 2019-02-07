import { Component, OnInit } from '@angular/core';
import { CommonService } from './../shared/common.service';

@Component({
  selector: 'app-wood-block',
  templateUrl: './wood-block.component.html',
  styleUrls: ['./wood-block.component.css'],
  providers: [CommonService]
})
export class WoodBlockComponent implements OnInit {

  constructor(private cs: CommonService) { }

  ngOnInit() {
  }

}


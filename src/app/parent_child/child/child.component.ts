import { Component, EventEmitter, Input,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{



  @Output() public childEvent = new EventEmitter();

  constructor() {
   }

   public EventChild(){
    this.childEvent.emit("message from child to parent !")
   }
  
  ngOnInit(): void {};


}

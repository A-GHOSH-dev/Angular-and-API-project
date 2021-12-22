import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { OthermessageService } from './othermessage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService, OthermessageService]
})
export class AppComponent {
  title = 'learningservice';
msg:String;
othersms:String;
  constructor(private _messageService:MessageService){

  
  }
  ngOnInit(){
     // this.msg=this._messageService.getmessage();
  }

  getmessage(){
    this.msg=this._messageService.getmessage();
    this.othersms=this._messageService.getmessagefromotherservice();
  }
}

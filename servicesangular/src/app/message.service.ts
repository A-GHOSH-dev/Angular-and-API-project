import { Injectable } from '@angular/core';
import { OthermessageService } from './othermessage.service';

//@Injectable({
//  providedIn: 'root'
//})
@Injectable()
export class MessageService {
othermsg: String="";
  constructor(private _othermessageService:OthermessageService) { }

  getmessage(){
    return "Learning Services in Angular";
  }

  getmessagefromotherservice(){
this.othermsg=this._othermessageService.getothermessage();
return this.othermsg;
  }
}

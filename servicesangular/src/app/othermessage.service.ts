import { Injectable } from '@angular/core';

//@Injectable({
//  providedIn: 'root'
//})
@Injectable()
export class OthermessageService {

  constructor() {
   
   }
   getothermessage(){
     return "Message from other service";
   }
}

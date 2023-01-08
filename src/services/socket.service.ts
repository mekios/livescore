import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { fromEvent, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ASTWithSource } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  goalLooker$!:Observable<any>;
  connected$!:Observable<any>;
  constructor(){}
  socket:Socket=io(environment.SOCKET,{});   
  
  setup(){    
    this.goalLooker$=fromEvent(this.socket,'goal'); 
    
  }

  


  disconnect() {
    if (this.socket) {
        this.socket.disconnect();
    }
  }


  


}
function switchMap(arg0: any): Observable<any> {
  throw new Error('Function not implemented.');
}


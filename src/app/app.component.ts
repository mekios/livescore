import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, mergeMap, pipe, switchMap, tap } from 'rxjs';
import { IGoal } from 'src/models/ievent';
import { SocketService } from 'src/services/socket.service';
import * as AppActions from './store/app.actions';
import { AppState } from './store/game.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LiveScore';
  
  constructor(private socketService:SocketService, private store:Store<AppState>){
    this.socketService.setup();
    this.socketService.goalLooker$.subscribe((payload)=>{
        this.store.dispatch( AppActions.goal({...payload,eventType:'goal'}));
        console.log(payload as IGoal);       
    }) 
    
   
  }    
}

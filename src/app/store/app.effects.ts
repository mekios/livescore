import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as AppActions from './app.actions';
import { SocketService } from 'src/services/socket.service';
import { Observable, switchMap } from 'rxjs';
import { IGoal } from 'src/models/ievent';
 
@Injectable()
export class GameEventEffects {

 
 
  constructor(
    private actions$: Actions,
   private socketService:SocketService
  ) {}
}
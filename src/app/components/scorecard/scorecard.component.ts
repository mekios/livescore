import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectApp } from 'src/app/store/app.selectors';
import { AppState } from 'src/app/store/game.reducer';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss']
})
export class ScorecardComponent implements OnInit{
    matchStatus$:any;
    constructor(public store:Store<AppState>){}
    ngOnInit(){
      this.store.select(selectApp).subscribe((state)=>{
        this.matchStatus$=state;
        console.log(state);
      })
    }
}

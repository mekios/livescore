import { Component, Input, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { IGoal } from 'src/models/ievent';
import { IDynamicComponent } from 'src/models/ieventComponent';

@Component({
  selector: 'app-goal-event',
  templateUrl: './goal-event.component.html',
  styleUrls: ['./goal-event.component.scss']
})
export class GoalEventComponent implements OnInit, IDynamicComponent{
  @Input()
  public payload?:IGoal;
  constructor(){}
  ngOnInit(){
    console.log(this.payload);
  }
}

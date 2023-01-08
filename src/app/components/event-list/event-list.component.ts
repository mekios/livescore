import { MapType } from '@angular/compiler';
import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { selectEvents } from 'src/app/store/app.selectors';
import { AppState } from 'src/app/store/game.reducer';



@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit, OnDestroy{

   
  eventsList$?:Observable<any[]>;
  constructor(public store:Store<AppState>){    
    let mp=new Map();
    
  }

  ngOnInit(){
    this.eventsList$=this.store.select(selectEvents);
    
  }

  ngOnDestroy(){}
  
}

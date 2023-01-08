import { AfterViewInit, Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IEvent } from 'src/models/ievent';
import { EmptyComponent } from '../eventComponents/empty/empty.component';
import { GoalEventComponent } from '../eventComponents/goal-event/goal-event.component';

@Component({
  selector: 'app-event-component-shell',
  templateUrl: './event-component-shell.component.html',
  styleUrls: ['./event-component-shell.component.scss']
})
export class EventComponentShellComponent implements AfterViewInit{
  @ViewChild('vrf',{read:ViewContainerRef}) vrf!:ViewContainerRef
  @Input() componentType='';
  @Input() componentPayload?:IEvent;
  constructor(){}
 

  ngAfterViewInit(){
    setTimeout(()=>{
    let componentOf;
    switch(this.componentType){
      case 'goal':
        componentOf=GoalEventComponent;
        break;
      default:
        componentOf=EmptyComponent;
        
    }
    let compRef=this.vrf!.createComponent(componentOf)
    compRef.instance.payload=this.componentPayload;
  })
    
  }
}

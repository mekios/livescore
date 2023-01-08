import { Component } from '@angular/core';
import { IEvent } from 'src/models/ievent';
import { IDynamicComponent } from 'src/models/ieventComponent';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements IDynamicComponent{
  payload?:IEvent;
}

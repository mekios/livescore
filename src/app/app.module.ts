import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SocketService } from 'src/services/socket.service';
import * as appStore from './store/game.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { GoalEventComponent } from './components/eventComponents/goal-event/goal-event.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { EventComponentShellComponent } from './components/event-component-shell/event-component-shell.component';
import { EmptyComponent } from './components/eventComponents/empty/empty.component';
import { ScorecardComponent } from './components/scorecard/scorecard.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalEventComponent,
    EventListComponent,
    EventComponentShellComponent,
    EmptyComponent,
    ScorecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({app: appStore.appReducer}),
    EffectsModule.forRoot([]),
    MatCardModule,
    StoreDevtoolsModule.instrument({
      maxAge:30
    }),
    BrowserAnimationsModule,
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }

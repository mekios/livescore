import { state } from "@angular/animations";
import { provideCloudinaryLoader } from "@angular/common";
import { Action, createReducer, on } from "@ngrx/store";
import { IEvent, IGoal } from "src/models/ievent";

import * as AppActions from './app.actions';

enum GameSession{
    'NONSTART',
    'FIRSTHALF',
    'SECONDHALF',
    'END'
}

const initState:AppState={
    eventsList:[],
    currentSession:GameSession.NONSTART,
    currentSessionStartTimestamp:undefined,
    homeScore:0,
    awayScore:0,
    homePlayerList:[],
    awayPlayerList:[]
}

export const appReducer = createReducer(
    initState,
    on(AppActions.newEvent,(state,payload) =>({...state, eventsList:[payload, ...state.eventsList]})),
    on(AppActions.timeStart,(state,payload) =>({...state,eventsList:[payload, ...state.eventsList],currentSession:state.currentSession+1,currentSessionStartTimestamp:payload.time})),
    on(AppActions.goal,(state,payload)=>{
        console.log('goal-reduced');
        if(payload.scoringTeam=='home'){
            return {...state,homeScore:state.homeScore+1,eventsList:[payload,...state.eventsList]}
        }else{
            return {...state,awayScore:state.awayScore+1,eventsList:[payload,...state.eventsList]}
        }
    })
    
)

export function reducer(state:AppState=initState,action:Action){
    return appReducer(state,action);
}

export interface AppState{
    currentSession:number;
    currentSessionStartTimestamp?:Date;
    homeScore:number;
    awayScore:number;
    homePlayerList:any[];
    awayPlayerList:any[];
    eventsList:any[];
}


import { createAction, props } from "@ngrx/store";
import { IEvent, IGoal } from "src/models/ievent";

export const newEvent=createAction('[Game] new event',props<any>);
export const goal=createAction('[Game] goal',props<IGoal>());
export const timeStart=createAction('[Game] timestart',props<IEvent>());
export const sessionChange=createAction('[Game] sessionChange',props<any>);
export const playerSwap=createAction('[Game] playerSwap',props<any>);
export const startListening=createAction('[Game] startlistening');



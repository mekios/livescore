import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "./game.reducer";

export const selectApp=createFeatureSelector<AppState>('app');

export const selectEvents=createSelector(
    selectApp,
    (state:AppState)=>state.eventsList
)
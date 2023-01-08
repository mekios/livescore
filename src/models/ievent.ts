export interface IEvent {
    time:Date;
    eventType:string;
}

export interface IGoal extends IEvent{    
    scoringTeam:string;
    scorerPlayerId:number;
    owngoal:boolean;
    time:Date; 
    eventType:string;
}

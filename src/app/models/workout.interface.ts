export interface IWorkoutStats {
    totalMinutes    : number;
    exerciseIDs     : number[];
}

export interface IWorkout {
    name        : string;
    duration    : number;
    link        : string;
}
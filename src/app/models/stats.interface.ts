import { IDrinkstats, IFoodstats } from "./beverage.interface";
import { IWorkoutStats } from "./workout.interface";

export interface IStats {
    drinkStats      : IDrinkstats;
    foodStats       : IFoodstats;
    workoutStats    : IWorkoutStats
}
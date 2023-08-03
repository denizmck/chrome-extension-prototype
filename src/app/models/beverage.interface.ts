export interface IDrinkstats {
    totalLiters     : number;
    itemsID         : number[];
}

export interface IFoodstats {
    totalKcal       : number;
    itemsID         : number[];
}

export interface IBeverage {
    name            : string;
    liters          : number;
    kcal            : number;
    id              : number;
}

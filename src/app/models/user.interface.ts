import { IProgression } from "./progression.interface";
import { IStats } from "./stats.interface";

export interface IUser {
    username    : string;
    userImage   : string        | null;
    progression : IProgression;
    stats       : IStats;
}
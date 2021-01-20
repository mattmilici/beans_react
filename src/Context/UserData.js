import { createContext } from "react";

export const UserData = createContext({
    UserName: "Matt",
    SwipeRightPercentage: 0,
    Reasons: ["Work", "Friends", "Family", "Eat Healthy", "Run 1 Mile", "Realtionship", "Oveall"],
    OverallStreak: 0,
    BestBean: "-",
    WorstBean: "-",
    SwipeRight: 0,
    TotalSwipe: 0,
});
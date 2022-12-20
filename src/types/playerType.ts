import {Simulate} from "react-dom/test-utils";
import play = Simulate.play;

export type Player = {
    playerId: number;
    name: string;
    shortname: string;
    color: string;
    iDidCounter: number;
    iDidNotCounter: number;

    iDidCounterIncrease: any;
};

export const PlayerFactory = (player: Player) => {
    player.iDidCounterIncrease = () => {
        //save to localstorage
        player.iDidCounter++;
    }
}

export class Player1 {
    playerId: number;
    name: string;
    shortname: string;
    color: string;
    #iDidCounter: number;
    #iDidNotCounter: number;

    constructor(playerId, name, shortname, color, iDidCounter, iDidNotCounter) {
    }


    increase() {
        //save to localstorage
        this.#iDidCounter++;
    }

    deletePlayer() {
        //delete player from localstorage
    }

    reset(){

    }
}
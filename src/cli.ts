import {isPosNumber, isValidCommands} from "./util";
import {convertToDirection, isDirection} from "./robot/direction";
import {startTransport} from "./transportProtocol";
import {parseCommands} from "./robot/command";
import {main} from "./index";

/**
 * CLI protocol after passing the parameters, validation
 */
export function runCli(x: string, y: string, direction: string,
                       commands: string, fieldSizeX: string, fieldSizeY: string, obstacles: number[][]) {
    if (isValidCommands(commands)) {
        if (isPosNumber(x) && isPosNumber(y) && isPosNumber(fieldSizeX) && isPosNumber(fieldSizeY)) {
            if (isDirection(direction)) {
                startTransport(parseInt(x), parseInt(y), convertToDirection(direction),
                    parseCommands(commands), obstacles, parseInt(fieldSizeX), parseInt(fieldSizeY));
            } else {
                console.log("Direction must be one of the following: N, S, E, W!");
                main();
            }
        } else {
            console.log("Coordinates have to be positive numbers!");
            main();
        }
    } else {
        console.log("Commands are unreadable, please try again!");
        main();
    }
}

import {Position} from "./position";
import {Direction} from "./direction";

/*Movement logic

Exporting functions for the robot's location and movement on the field
*/

export type Command = 'f' | 'b' | 'l' | 'r';

export function parseCommands(commands: string): Command[] {
    return commands.split("").map(c => {
        switch (c) {
            case "f":
            case "b":
            case "l":
            case "r":
                return c;
            default:
                throw new Error('Invalid command');
        }
    });
}

export function move(position: Position, direction: Direction, length: number): Position {
    switch (direction) {
        case "N":
            return {x: position.x, y: position.y - length};
        case "S":
            return {x: position.x, y: position.y + length};
        case "E":
            return {x: position.x + length, y: position.y};
        case "W":
            return {x: position.x - length, y: position.y};
    }
}

export function rotate(direction: Direction, rotation: 'r' | 'l'): Direction {
    switch (direction) {
        case "N":
            return rotation === 'r' ? "E" : "W";
        case "S":
            return rotation === 'r' ? "W" : "E";
        case "E":
            return rotation === 'r' ? "S" : "N";
        case "W":
            return rotation === 'r' ? "N" : "S";
    }
}

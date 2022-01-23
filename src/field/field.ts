import {Position, samePosition} from "../robot/position";

export type Obstacles = number[][];

/**
 * Field logic, position validation and obstacle detection
 */
export interface Field {
    x_max: number;
    y_max: number;
    obstacles: Obstacles;
}

export function printField(field: Field, robotPath?: Position[]): void {
    for (let j = 0; j < field.y_max; j++) {
        for (let i = 0; i < field.x_max; i++) {
            if (isValidPosition(field, {x: i, y: j})) {
                if(robotPath && !!robotPath.find(p=> samePosition(p,{x: i, y: j}))){
                    process.stdout.write("[R]");
                } else{
                    process.stdout.write("[ ]");
                }
            } else {
                process.stdout.write("[X]");
            }
        }
        console.log()
    }
}

export function isValidPosition(field: Field, position: Position): boolean {
    return !hasObstacle(field, position) && isPositionInBounds(field, position)
}

export function hasObstacle(field: Field, position: Position): boolean {
    return !!field.obstacles.find(o => samePosition({x: o[0], y: o[1]}, position));
}

export function isPositionInBounds(field: Field, position: Position): boolean {
    const {x, y} = position;
    return (x >= 0)
        && (x < field.x_max)
        && (y >= 0)
        && (y < field.y_max);
}

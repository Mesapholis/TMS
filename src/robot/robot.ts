import {Command, move, rotate} from "./command";
import {Position} from "./position";
import {Direction} from "./direction";
import {Field, isValidPosition} from "../field/field";

/*
*Transport robot logic
*/
export interface Robot {
    position: Position;
    direction: Direction;
    status: "OK" | "OBSTACLE HERE";
    lastCommand?: Command;
}

export function applyCommand(robot: Robot,
                             field: Field,
                             command: Command): Robot {
    switch (command) {
        case "f":
            return checkedMoveRobot(robot, field, 1, command);
        case "b":
            return checkedMoveRobot(robot, field, -1, command);
        case "r":
            return {...robot, direction: rotate(robot.direction, "r"), lastCommand: command};
        case "l":
            return {...robot, direction: rotate(robot.direction, "l"), lastCommand: command};
    }
}

/**
 * checkedMoveRobot validates the robot's next move or declares the position of the obstacle on it's last entry
 * with the status 'OBSTACLE HERE' at the position coordinates.
 * In case of an obstacle the robot's last position with status 'OK' is where it is located.
 */
export function checkedMoveRobot(robot: Robot, field: Field, length: number, command): Robot {
    const nextPosition = move(robot.position, robot.direction, length);
    if (isValidPosition(field, nextPosition)) {
        return {...robot, position: nextPosition, lastCommand: command};
    } else {
        return {...robot, position: nextPosition, lastCommand: command, status: "OBSTACLE HERE"};
    }
}

export function printRobot(robot: Robot): string{
    return "Robot(" + robot.position.x + "," + robot.position.y + ", Orientation=" + robot.direction
        + "), Status=" + robot.status + ", last command=" + robot.lastCommand;
}

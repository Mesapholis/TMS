import {Direction} from "./robot/direction";
import {Command} from "./robot/command";
import {Obstacles, printField} from "./field/field";
import {applyCommand, printRobot, Robot} from "./robot/robot";

/**
 *Transport initiation, also prints out a map with the obstacle and a map with the robot's path and the obstacles
 */
export function startTransport(x: number, y: number, direction: Direction, commands: Command[],
                        obstacles: Obstacles, x_max: number, y_max: number): Robot[] {
    const field = {x_max: x_max, y_max: y_max, obstacles: obstacles};
    console.log("1. Field with obstacles");
    printField(field);
    console.log();
    var robotHistory: Robot[] = [];
    var robotHistoryPretty: string[] = [];
    var robot: Robot = {position: {x: x, y: y}, direction: direction, status: "OK"};
    robotHistory.push(robot);
    robotHistoryPretty.push(printRobot(robot));
    commands.forEach(c => {
        if (robot.status === "OK") {
            robot = applyCommand(robot, field, c);
            robotHistory.push(robot);
            robotHistoryPretty.push(printRobot(robot));
        }
    });
    if (robot.status == "OK") {
        console.log("2. Robot made it to the end :)");
    } else {
        console.log("2. Robot has encountered an obstacle! \n");
    }
    console.log("3. Field with obstacles and mapped robot path");
    printField(field, robotHistory.map(x => x.position));
    console.log("\n" + "4. Robot history:\n",robotHistoryPretty);
    return robotHistory;
}

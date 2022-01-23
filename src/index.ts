import {question} from 'readline-sync';
import {startTransport} from "./transportProtocol";
import {runCli} from "./cli";

/**
 * After feedback from Tobias Verleger I built this CLI under these conditions:
 * - we assume startPos(0,0) at the harvest location
 * - field size is supposed to be passed
 * - commands are supposed to be passed as string i.e 'frf'
 * - robot position is supposed to be passed i.e. as (0,0), orientation('N')
 */

/**
 * Entry point for Transport Management System
 */

const testObstacles: number[][] = [[1, 1]];
//Example entry: coordinates(0,0) direction 'W', commands 'lfflff', x_max:3, y_max:3

export function main(): void {
    const x: string = question('Enter robot X coordinate:\n');
    const y: string = question('Enter robot Y coordinate:\n');
    const direction: string = question('Enter direction i.e. N:\n');
    const commands: string = question('Enter commands as continuous string i.e frfflf :\n');
    const fieldSizeX: string = question('Enter field size x_max:\n');
    const fieldSizeY: string = question('Enter field size y_max:\n');

    runCli(x, y, direction, commands, fieldSizeX, fieldSizeY, testObstacles);
}

main();

/*Example testcases, bypassing main with CLI entry, comment main();

Testcase, running into an obstacle at position (1,1)
startTransport(0, 0, 'S', ['f', 'f', 'l', 'f', 'l', 'f'], [[1, 1]], 5, 5);

Testcase, running into a wall straight on
startTransport(0, 0, 'S', ['f', 'f', 'f', 'f', 'f', 'f'], [[1, 1]], 5, 5);

Testcase, successful transport until the end
startTransport(0, 0, 'S', ['f', 'f', 'l', 'f', 'l', 'f'], [[1, 1]], 5, 5);
*/

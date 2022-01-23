import {startTransport} from "../src/transportProtocol";
import {convertToDirection} from "../src/robot/direction";
import {parseCommands} from "../src/robot/command";
import {Robot} from "../src/robot/robot";

describe('Check robot correctness of robotHistory', () => {
    it('validates the movement history/robot history', () => {
        const robotEntry1: Robot = {position:{x:0,y:0}, direction:'S', status:'OK'};
        const robotEntry2: Robot = {position:{x:0,y:1}, direction:'S', status:'OK', lastCommand:'f'};

        var robotHistory: Robot[] = [];
        robotHistory.push(robotEntry1, robotEntry2);

        expect(startTransport(parseInt('0'), parseInt('0'), convertToDirection('S'),
            parseCommands('f'), [[1,1]], parseInt('3'), parseInt('3')))
            .toStrictEqual(robotHistory);
    });
});

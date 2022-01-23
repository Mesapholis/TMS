import {applyCommand, checkedMoveRobot} from "../../src/robot/robot";

describe('Robot applies command', () => {
    it('should create a new robot with updated values', () => {
        expect(applyCommand({position:{x:1, y:2}, direction:'S', status:'OK', lastCommand:'f'},
            {x_max:4, y_max:4, obstacles:[[1,1]]}, 'f'))
            .toStrictEqual({position:{x:1, y:3}, direction:'S', status:'OK', lastCommand:'f'})
    });
});

describe('Successfully validates next position for robot', () => {
    it('should check if next move is to a free and valid position', () => {
        expect(checkedMoveRobot({position:{x:1, y:2}, direction:'S', status:'OK', lastCommand:'f'},
            {x_max:4, y_max:4, obstacles:[[1,1]]}, 1, 'f'))
            .toStrictEqual({position:{x:1, y:3}, direction:'S', status:'OK', lastCommand:'f'})
    });
});

describe('Unsuccessfully validates next position for robot', () => {
    it('should encounter an invalid/blocked position', () => {
        expect(checkedMoveRobot({position:{x:1, y:0}, direction:'S', status:'OK', lastCommand:'f'},
            {x_max:4, y_max:4, obstacles:[[1,1]]}, 1, 'f'))
            .toStrictEqual({position:{x:1, y:1}, direction:'S', status:'OBSTACLE HERE', lastCommand:'f'})
    });
});

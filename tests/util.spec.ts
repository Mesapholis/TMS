import {isPosNumber, isValidCommand, isValidCommands} from "../src/util";
import {hasObstacle} from "../src/field/field";

describe('Coordinates should each be positive numbers', () => {
    it('checks coordinate entries to be positive numbers', () => {
        const x = '2';
        const y = '3';
        expect(isPosNumber(x)).toBe(true);
        expect(isPosNumber(y)).toBe(true);
    });
});

describe('Checks validity of command string', () => {
    it('confirms validity of all commands in the command string', () => {
        expect(isValidCommands('fff')).toBe(true);
    });
});

describe('Checks invalidity of command string', () => {
    it('confirms that T is not a valid command in the commands string', () => {
        expect(isValidCommands('ffT')).toBe(false);
    });
});

describe('Checks validity of single command', () => {
    it('confirms the validity of b as command', () => {
        expect(isValidCommand('b')).toBe(true);
    });
});

describe('Finds obstacle', () => {
    it('should confirm an obstacle at the position', ()=> {
        expect(hasObstacle({x_max:3,y_max:3,obstacles:[[1,1]]},
            {x:1,y:1})).toBe(true);
    });
});

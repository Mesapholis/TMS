import {move, parseCommands, rotate} from "../../src/robot/command";

describe('Parses commands', () => {
    it('Should successfully split a string with valid commands into a command array', () => {
        expect(parseCommands('bflr')).toEqual(['b', 'f', 'l', 'r']);
    })
})

describe('Robot moves forward from position (0,0) direction S', () => {
    it('changes position to position (0,1) direction S', () => {
        expect(move({x: 0, y: 0}, "S", 1)).toEqual({x: 0, y: 1});
    })
});

describe('Robot rotates to the left from direction E', () => {
    it('changes direction to North', () => {
        expect(rotate('E', 'l')).toBe('N');
    })
});


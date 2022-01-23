import {samePosition} from "../../src/robot/position";

describe('Validate overlapping positions', () => {
    it('Determines two positions to be equal', () => {
        expect(samePosition({x: 4, y: 3}, {x: 4, y: 3})).toBe(true);
    });
});

describe('Determines two positions not to be equal', () => {
    it('confirms two positions are different', () => {
        expect(samePosition({x: 4, y: 3}, {x: 5, y: 3})).toBe(false);
    });
});

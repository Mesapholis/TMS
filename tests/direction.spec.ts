import {convertToDirection, isDirection} from "../src/robot/direction";

describe('Validate direction input', () => {
    it('confirms W as valid Direction entry', () => {
        expect(isDirection('W')).toBe(true);
    });
});

describe('Fail direction input validation', () => {
    it('confirms that this is not a valid entry for Direction', () => {
        expect(isDirection('NOT A VALID DIRECTION')).toBe(false);
    });
});

describe('Convert valid direction string to Direction', () => {
    it('confirms the validity of S as entry for Direction', () => {
        expect(convertToDirection('S')).toBe('S');
    });
});

describe('Fail to convert invalid direction string to Direction ', () => {
    it('confirms that K can not be coverted into Direction', () => {
        expect(convertToDirection('K')).toBe(null);
    });
});

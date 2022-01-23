import {isValidPosition, printField} from "../../src/field/field";

describe('Validate position', () => {
    it('successfully validates the correctness of a position', () => {
        expect(isValidPosition({x_max:5, y_max:5, obstacles:[[1, 1]]}, {x:4, y:4}));
    });
});

describe('Finds invalid position position', () => {
    expect(isValidPosition({x_max:5, y_max:5, obstacles:[[1, 1]]}, {x:1, y:1}));
});

describe('Field logger behavior', () => {
    xtest('', () => {
        expect(spyOn(printField({x_max:2, y_max:2, obstacles:[[1,1]]}), 'message' as never)).toEqual('[ ][ ]\n[ ][X]');
    });
});



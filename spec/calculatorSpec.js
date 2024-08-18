const add = require('../src/calculator');

describe('Calculator', function() {
    it('should add two numbers correctly', () => {
        expect(add(1, 2)).toBe(3);
    });

    let a;

    beforeEach(function() {
        a = true;
    });

    afterEach(function() {
        a = null;
    });
    
    it("should work with booleans too", function() {

        expect(add(1, 2)==3).toBe(a);
    });

    it("and negative booleans too", function() {

        expect(add(1, 2)==4).not.toBe(a);
    });


}); 


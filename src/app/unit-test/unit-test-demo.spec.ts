let checkIfEvent = function(x: any) {
    if (x % 2 == 0) return `${x} is an even number`;
    else return `${x} is an odd number`
}

describe('the check if even function', function() {
    it ('return statement says the given number is an even number', () => {
        var actualResult = checkIfEvent(2);
        var expectedResult = '2 is an even number';
        expect(actualResult).toBe(expectedResult);
    });

    it ('return statement says the given number is an odd number', () => {
        var actualResult = checkIfEvent(3);
        var expectedResult = '3 is an odd number';
        expect(actualResult).toBe(expectedResult);
    })
    
})
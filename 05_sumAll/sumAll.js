const sumAll = function(numOne, numTwo) {
    let sum = 0;
    let len = 0;
    if ((Number.isInteger(numOne) && Number.isInteger(numTwo)) && (numOne >= 0 && numTwo > 0)) {
        if (numOne > numTwo) {
            len = (numOne - numTwo + 1);
        } else if (numTwo > numOne) {
            len = (numTwo - numOne + 1);
        } 

        for (let i = 0; i < len; i++) {
            if (numOne > numTwo) {
                sum += (numTwo + i);
            } else if (numTwo > numOne) {
                sum += (numOne + i);
            }
        }
        return sum;
    } else {
        return 'ERROR';
    }
    
};

// Do not edit below this line
module.exports = sumAll;

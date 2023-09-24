const repeatString = function(string, num) {
    const constString = string;
    if (num > 0) {
        for (i = 0; i < num - 1; i++) {
            string += constString;
        }
        return string;
    } else if (num === 0) {
        return '';
    } else {
        return 'ERROR'
    }
    
};

// Do not edit below this line
module.exports = repeatString;

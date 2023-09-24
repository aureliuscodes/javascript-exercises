const reverseString = function(string) {
    let array = string.split('');
    let newString = '';
    array.reverse();
    newString = array.join('');
    return newString;
};

// Do not edit below this line
module.exports = reverseString;

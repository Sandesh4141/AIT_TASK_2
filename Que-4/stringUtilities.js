

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to check if a string is palindrome
function isPalindrome(str) {
    return str === reverseString(str);
}
function toLowerCase(str) {
    return str.toLowerCase();
}

function toUpperCase(str) {
    return str.toUpperCase();
}
function concatenateStrings(str1, str2) {
    return str1 + str2;
}

// Export the utility functions
module.exports = {
    capitalizeFirstLetter,
    reverseString,
    isPalindrome,
    toLowerCase,
    toUpperCase,
    concatenateStrings
};


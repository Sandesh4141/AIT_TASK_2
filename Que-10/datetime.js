function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Function to get the current day 
function getCurrentDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    return days[currentDate.getDay()];
}

function getCurrentTime() {
    const currentDate = new Date();
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function getCurrentMonth() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentDate = new Date();
    return months[currentDate.getMonth()];
}

function getCurrentYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
}

function getCurrentMonthNumber() {
    const currentDate = new Date();
    return currentDate.getMonth() + 1;
}


module.exports = {
    getCurrentDate,
    getCurrentDay,
    getCurrentTime,
    getCurrentMonth,
    getCurrentYear,
    getCurrentMonthNumber
};

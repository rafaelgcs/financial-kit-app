// Debounce Function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const addDaysInDate = function (date, days) {
    date.setDate(date.getDate() + days);
    return date;
}


const getFormatedDate = (date, withHours) => {
    let days = date.getUTCDate();
    let month = date.getUTCMonth() + 1;
    let year = date.getUTCFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();

    let str = `${days < 10 ? `0${days}` : days}/${month < 10 ? `0${month}` : month}/${year}`;

    if (withHours) {
        str += ` - ${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}`;
    }

    return str;
}

const getNameInitials = (str) => {
    let strArray = str.split(' ');
    let initials = '';

    if (strArray.length > 1) {
        initials = `${strArray[0][0]}${strArray[(strArray.length - 1)][0]}`;
    } else {
        initials = `${str[0]}${str[1]}`;
    }

    return initials;
}

const toCript = (str) => {
    if (str != null) {
        const buff = Buffer.from(str, 'utf-8');
        return buff.toString('base64');
    }
    return null
}

const fromCript = (str) => {
    if (str != null) {
        const buff = Buffer.from(str, 'base64');
        return buff.toString('utf-8');
    }
    return null

}

export { debounce, addDaysInDate, getFormatedDate, getNameInitials, fromCript, toCript }
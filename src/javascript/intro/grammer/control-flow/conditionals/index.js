export const greeting = (age = 0) => {
    if (greeting(age) > 18) {
    return "Hello!";
} 
    else  {
    return "Yo!";
    }
}

export const isTacoTuesday = (day = '') => {
    if(day === ‘tuesday’) {
        return true;
    }
    else {
        return false;
    }
}




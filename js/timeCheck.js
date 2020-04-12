setInterval(() => {
    function dispMessage() {
        dateFunc = new Date();
        closeHour = 16
        thisHour = dateFunc.getHours();
        resumeHour = 8 - (thisHour + 1)
        openHr = (resumeHour >= 2) ? String(resumeHour) + ' Hours' : resumeHour + ' Hour'
        remainHour = closeHour - (thisHour + 1)
        hrCheck = (remainHour >= 2) ? String(remainHour) + ' Hours' : remainHour + ' Hour'
        thisMins = 60 - dateFunc.getMinutes();
        minsCheck = (thisMins >= 2) ? String(thisMins) + ' Minutes' : thisMins + ' Minute'
        thisSec = 60 - dateFunc.getSeconds();
        secCheck = (thisSec >= 2) ? String(thisSec) + ' Seconds' : thisSec + ' Second'

        if (thisHour == 0 || thisHour < 8) {
            if (resumeHour < 1) {
                message = `Good morning our adorable customer, we will resume business in ${minsCheck}.`;
                // for less than an hour
                // message = `Good morning our adorable customer, we resume business in ${minsCheck}.`;
            } else {
                message = `Good morning our adorable customer, we will resume business in ${openHr}, ${minsCheck} and ${secCheck}.`;
            }
        } else if (thisHour == 8 || thisHour <= 11) {
            message = "Hello, we are open for business and hope you have a wonderful day.";
        } else if (thisHour == 12 || thisHour < 14) {
            message = "Wishing you a beautiful afternoon. We are still open for business.";
        } else 
        if (thisHour == 14 || thisHour < 16) {
            message = `We will close for business in ${hrCheck}, ${minsCheck} and ${secCheck}`;
        } else {
            message = "You can reach us through our contacts. We are close for business today.";
        }

        return message;
    }
    document.getElementById("ourMessage").innerHTML = dispMessage();
}, 1000);
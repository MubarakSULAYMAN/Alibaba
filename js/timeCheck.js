function dispMessage() {
    dateFunc = new Date();
    closeHour = 16
    thisHour = dateFunc.getHours();
    resumeHour = 8 - (thisHour + 1)
    openHr = (resumeHour >= 2) ? String(resumeHour) + ' Hours' : resumeHour + ' Hour'
    remainHour = closeHour - thisHour
    hrCheck = (remainHour < 2) ? String(remainHour) + ' Hours' : remainHour + ' Hour'
    thisMins = 60 - dateFunc.getMinutes();
    minsCheck = (thisMins < 2) ? String(thisMins) + ' Minutes' : thisMins + ' Minute'
    thisSec = 60 - dateFunc.getSeconds();
    secCheck = (thisSec < 2) ? String(thisSec) + ' Seconds' : thisSec + ' Second'
    String(dateFunc.getHours() + ':' + dateFunc.getMinutes() + ':' + dateFunc.getSeconds());

    if (thisHour == 14) {
        message = `We will close in ${hrCheck} Hour ${minsCheck} Minutes ${secCheck} Seconds`;
        // console.log(`We will close in ${hrCheck} Hour ${minsCheck} Minutes ${secCheck} Seconds`);
    } else {
        if (thisHour == 0 || thisHour < 8) {
            if (resumeHour < 1) {
                message = `Good morning our adorable customer, we resume business in ${minsCheck}.`;
                // console.log(`Good morning our adorable customer, we resume business in ${minsCheck}.`);
            } else {
                message = `Good morning our adorable customer, we resume business in ${openHr} ${minsCheck}.`;
                // console.log(`Good morning our adorable customer, we resume business in ${openHr} ${minsCheck}.`);
            }
        } else if (thisHour == 8 || thisHour < 10) {
            message = "A mesage for 8-9am";
            // console.log("A mesage for 8-9am");
        } else if (thisHour == 10 || thisHour < 12) {
            message = "A mesage for 10-11noon";
            // console.log("A mesage for 10-11noon");
        } else if (thisHour == 12 || thisHour < 14) {
            message = "A mesage for 12-14noon";
            // console.log("A mesage for 12-14noon");
        } else {
            message = "Hours after closing.";
            // console.log("Hours after closing.");
        }
    }

    return message
}

document.getElementById("ourMessage").innerHTML = setInterval(dispMessage(), 1000);
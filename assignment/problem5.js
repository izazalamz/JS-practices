function calculateSleepTime(arr){
    let totalTime = 0;
    for(const time of arr){
        if (typeof time != "number") return "Invalid"
        totalTime += time;
    }
    const hour = parseInt(totalTime/3600);
    const min = parseInt((totalTime%3600)/60);
    const sec = ((totalTime%3600)%60);
    return {"hour": hour, "minute":min, "second":sec};

}

console.log(calculateSleepTime([100, 3800, "90" ]));
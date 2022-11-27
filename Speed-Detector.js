const speedLimit = 70;
function speedDemeritPoint(speed) {
    if (speed < speedLimit) {
        console.log(`You are below the speed limit. Thank you for observing safety.`)
        return "Ok";
    } else {
        let overspeed = speed - speedLimit;
        let demeritPoints = overspeed / 5;
        if (demeritPoints < 12) {
            console.log(`You have ${demeritPoints} demerit points!`)
            return demeritPoints;
        } else {
            console.log(`You are driving way above the speed limit. Your license is suspended!`)
            return "License is suspended";
        }
    }

}
console.log(speedDemeritPoint(60))
// speed limit is set at a constant of 70
const speedLimit = 70;

// function speedDemeritPoint takes in current speed and prints out as follows
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

//Run the code below this line. The argument takes in the current speed. Feel free to change only the argument value
console.log(speedDemeritPoint(60));
//Run the code above this line
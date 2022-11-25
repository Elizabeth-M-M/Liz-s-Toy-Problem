const speedLimit = 70;
function speedDemeritPoint(speed) {
    if (speed < 70) {
        return "Ok";
    } else {
        let overspeed = speed - speedLimit;
        let demeritPoints = overspeed / 5;
        if (demeritPoints < 12) {
            return demeritPoints;
        } else {
            return "License is suspended";
        }
    }

}
console.log(speedDemeritPoint(83))
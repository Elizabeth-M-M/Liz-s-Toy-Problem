function checkGrade() {
    let grade = inputGrade();
    switch (true) {
        case grade > 79:
            console.log(`For a grade of ${grade}, you have an A.`)
            return ' A';
            break;
        case grade >= 60:
            console.log(`For a grade of ${grade}, you have a B.`)
            return 'B';
            break;
        case grade >= 50:
            console.log(`For a grade of ${grade}, you have a C.`)
            return 'C';
            break;
        case grade >= 40:
            console.log(`For a grade of ${grade}, you have a D.`)
            return 'D';
            break;
        case grade < 40:
            console.log(`For a grade of ${grade}, you have an E.`)
            return 'E';
                       }
}

function inputGrade() {
    let grade = prompt('Your marks on this subject is?');

    if (parseInt(grade)== grade) {
        let gradeInteger = parseInt(grade);
        if (gradeInteger <= 100 && gradeInteger >= 0) {
            return gradeInteger;
        } else {
            return alert("Kindly make sure your grade is between 0 to 100.");
        }
    }
    if (parseInt(grade) !== grade) {
            return alert("Kindly fill in a valid grade in numbers.");
    }
}


console.log(checkGrade());
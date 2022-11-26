function checkGrade() {
    let marks = inputMarks();
    switch (true) {
        case marks > 79:
            console.log(`For a marks of ${marks}, your grade is A.`)
            return ' A';
            break;
        case marks >= 60:
            console.log(`For a marks of ${marks}, your grade is B.`)
            return 'B';
            break;
        case marks >= 50:
            console.log(`For a marks of ${marks}, your grade is C.`)
            return 'C';
            break;
        case marks >= 40:
            console.log(`For a marks of ${marks}, your grade is D.`)
            return 'D';
            break;
        case marks < 40:
            console.log(`For a marks of ${marks}, your grade is E.`)
            return 'E';
                       }
}

function inputMarks() {
    let marks = prompt('Your marks on this subject is?');

    if (parseInt(marks)== marks) {
        let marksInteger = parseInt(marks);
        if (marksInteger <= 100 && marksInteger >= 0) {
            return marksInteger;
        } else {
            return alert("Kindly make sure your marks is between 0 to 100.");
        }
    }
    if (parseInt(marks) !== marks) {
            return alert("Kindly fill in valid marks in numbers.");
    }
}


console.log(checkGrade());
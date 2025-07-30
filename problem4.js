// Use nested if-else

let marks = 95;
let friendsMarks = 90;

if (marks > 80) {
    if (friendsMarks >= 80) {
        console.log('Then go fore lunch');
    }
    else if (friendsMarks >= 60) {
        console.log('Good luck for next time');
    }
    else if (friendsMarks >= 40) {
        console.log('Keep your friends massage unseen');
    }
    else {
        console.log('Block your Friend');
    }
}
else {
    console.log('Sleep and act sad');
}
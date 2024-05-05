// Question ______________ 109


// Get the current date and time
const now = new Date();
// Get the current hour in 24-hour format (0-23)
const currentHour = now.getHours();

// Check if the current hour is before 12 PM (noon)
if (currentHour < 12) {
    console.log("Good Morning");
} else {
    console.log("It's not morning anymore!");
}


// Question ______________ 110

function assignGrade(score: number): string {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Example usage:
const studentScore = 85;
const grade = assignGrade(studentScore);
console.log(`Student score: ${studentScore}, Grade: ${grade}`);


// Question ________________ 111


function categorizeAge(age: number): string {
    if (age < 13) {
        return "Child";
    } else if (age >= 13 && age <= 19) {
        return "Teenager";
    } else {
        return "Adult";
    }
}

// Example usage:
const personAge = 25;
const ageGroup = categorizeAge(personAge);
console.log(`Person's age: ${personAge}, Age group: ${ageGroup}`);

var divEL = document.getElementById("container");
// var h1EL = document.createElement("h1");

var fullName = JSON.parse(localStorage.getItem("fullname"));
var matricMarks = JSON.parse(localStorage.getItem("matricmarks"));
var totalmarks = 1100;

var percentage = (matricMarks / totalmarks) * 100;


var grade = "F";
     if (percentage >= 90) {
    grade = "A++";
    } else if (percentage >= 80) {
    grade = "A1";
    } else if (percentage >= 70) {
    grade = "A";
    } else if (percentage >= 60) {
    grade = "B";
    } else if (percentage >= 50) {
    grade = "C";
    } else if (percentage >= 40) {
    grade = "D";
    }  else if (percentage >= 30) {
    grade = "E";
    }
    else {
    grade = "F";
    }

var nameEL = document.createElement("h1");
nameEL.textContent = "Name: " + fullName;

var marksEL = document.createElement("h1");
marksEL.textContent = "Obtained Marks: " + matricMarks;

var percentEL = document.createElement("h1");
percentEL.textContent = "Percentage: " + percentage.toFixed(1) + "%";

var totalMarks = document.createElement("h1");
totalMarks.textContent = "Total Marks: " + totalmarks;

var gradeEL = document.createElement("h1");
gradeEL.textContent = "Grade: " + grade;

// Append to container
divEL.appendChild(nameEL);
divEL.appendChild(marksEL);
divEL.appendChild(percentEL);
divEL.appendChild(totalMarks);
divEL.appendChild(gradeEL);

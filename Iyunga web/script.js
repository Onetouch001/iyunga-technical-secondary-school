// Get the application form
const form = document.getElementById("applicationForm");

// Get the student list
const studentList = document.getElementById("studentList");

// Get registered students from the browser
let students = JSON.parse(localStorage.getItem("students")) || [];


// Show registered students
function displayStudents() {

    if (!studentList) {
        return;
    }

    studentList.innerHTML = "";

    // Only show students if someone has registered
    if (students.length > 0) {

        students.forEach(function(student) {

            const li = document.createElement("li");

            li.textContent = student.name + " - Age " + student.age;

            studentList.appendChild(li);
        });
    }
}

// Register student
if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("studentName").value.trim();
        const age = document.getElementById("studentAge").value;
        const message = document.getElementById("message");

        // Create student
        const student = {
            name: name,
            age: age
        };

        // Add student
        students.push(student);

        // Save student
        localStorage.setItem("students", JSON.stringify(students));

        // Show success message
        message.textContent =
            "Registration successful! Welcome " + name + ".";

        // Clear form
        form.reset();

        // Show the newly registered student
        displayStudents();
    });
}


// Academic button
function showMessage() {

    const message = document.getElementById("academicMessage");

    if (message) {
        message.textContent =
            "Our students combine classroom learning with practical skills.";
    }
}


// Contact button
function contactMessage() {

    const message = document.getElementById("contactMessage");

    if (message) {
        message.textContent =
            "Thank you for your interest in Iyunga Tech Secondary School.";
    }
}


// Display students
displayStudents();
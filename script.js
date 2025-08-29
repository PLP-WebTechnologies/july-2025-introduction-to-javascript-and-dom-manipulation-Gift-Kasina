// ========================================
// 🎯 PART 1: VARIABLES, DATA TYPES & CONDITIONALS
// ========================================

// Declare variables with different data types
let userName = "";           // String
let userAge = 0;            // Number
let isAdult = false;        // Boolean
let welcomeMessage = null;   // Null (will be assigned later)

// Get the submit button and add event listener
document.getElementById('submitInfo').addEventListener('click', function() {
    // Get user input from form fields
    userName = document.getElementById('nameInput').value;
    userAge = parseInt(document.getElementById('ageInput').value);
    
    // Use conditionals to determine if user is adult
    if (userAge >= 18) {
        isAdult = true;
        welcomeMessage = `Hello ${userName}! You are ${userAge} years old and you're an adult. 🎉`;
    } else if (userAge > 0) {
        isAdult = false;
        welcomeMessage = `Hi ${userName}! You are ${userAge} years old and you're still young! 😊`;
    } else {
        welcomeMessage = "Please enter a valid age! 🤔";
    }
    
    // Display the result
    document.getElementById('personalInfo').innerHTML = welcomeMessage;
    
    // Log to console for debugging
    console.log("User Name:", userName, "Type:", typeof userName);
    console.log("User Age:", userAge, "Type:", typeof userAge);
    console.log("Is Adult:", isAdult, "Type:", typeof isAdult);
});

// ========================================
// ❤️ PART 2: FUNCTIONS - REUSABLE CODE BLOCKS
// ========================================

// Function 1: Add two numbers
function addNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}

// Function 2: Multiply two numbers
function multiplyNumbers(num1, num2) {
    let result = num1 * num2;
    return result;
}

// Function 3: Format result with currency
function formatResult(number) {
    if (typeof number === 'number') {
        return `$${number.toFixed(2)}`;
    } else {
        return "Invalid number";
    }
}

// Event listeners for calculator buttons
document.getElementById('addBtn').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        let result = addNumbers(num1, num2);
        document.getElementById('calculatorResult').innerHTML = 
            `Addition Result: ${num1} + ${num2} = ${result}`;
    } else {
        document.getElementById('calculatorResult').innerHTML = 
            "Please enter valid numbers! ⚠️";
    }
});

document.getElementById('multiplyBtn').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        let result = multiplyNumbers(num1, num2);
        document.getElementById('calculatorResult').innerHTML = 
            `Multiplication Result: ${num1} × ${num2} = ${result}`;
    } else {
        document.getElementById('calculatorResult').innerHTML = 
            "Please enter valid numbers! ⚠️";
    }
});

document.getElementById('formatBtn').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        let result = addNumbers(num1, num2);
        let formattedResult = formatResult(result);
        document.getElementById('calculatorResult').innerHTML = 
            `Formatted Result: ${formattedResult}`;
    } else {
        document.getElementById('calculatorResult').innerHTML = 
            "Please enter valid numbers first! ⚠️";
    }
});

// ========================================
// 🔁 PART 3: LOOPS - POWER OF REPETITION
// ========================================

// Loop Example 1: Countdown using for loop
document.getElementById('countdownBtn').addEventListener('click', function() {
    let countdown = "";
    
    // For loop counting down from 5 to 1
    for (let i = 5; i >= 1; i--) {
        countdown += `${i}... `;
    }
    countdown += "🚀 Launch!";
    
    document.getElementById('loopResults').innerHTML = 
        `<strong>Countdown:</strong><br>${countdown}`;
    
    console.log("Countdown completed using for loop");
});

// Loop Example 2: Generate list using while loop and arrays
document.getElementById('listBtn').addEventListener('click', function() {
    // Array of hobbies
    let hobbies = ["Reading", "Coding", "Gaming", "Drawing", "Music"];
    let hobbyList = "<strong>My Hobbies:</strong><br><ul>";
    let i = 0;
    
    // While loop to iterate through array
    while (i < hobbies.length) {
        hobbyList += `<li>${hobbies[i]} 🎯</li>`;
        i++;
    }
    hobbyList += "</ul>";
    
    document.getElementById('loopResults').innerHTML = hobbyList;
    
    console.log("Hobby list generated using while loop");
});

// ========================================
// 🌐 PART 4: DOM MANIPULATION - BRING PAGE TO LIFE
// ========================================

// DOM Interaction 1: Toggle theme (change classes)
document.getElementById('toggleBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    // Change button text based on current theme
    if (document.body.classList.contains('dark-theme')) {
        this.textContent = '☀️ Light Theme';
        console.log("Switched to dark theme");
    } else {
        this.textContent = '🌙 Dark Theme';
        console.log("Switched to light theme");
    }
});

// DOM Interaction 2: Add new elements dynamically
let taskCounter = 1;

document.getElementById('addTaskBtn').addEventListener('click', function() {
    // Create new list item element
    let newTask = document.createElement('li');
    newTask.textContent = `Task ${taskCounter}: Complete JavaScript assignment`;
    
    // Add the new task to the task list
    document.getElementById('taskList').appendChild(newTask);
    
    taskCounter++;
    console.log(`Added task ${taskCounter - 1}`);
});

// DOM Interaction 3: Hide/Show elements
let tasksVisible = true;

document.getElementById('hideShowBtn').addEventListener('click', function() {
    let taskContainer = document.getElementById('taskContainer');
    
    if (tasksVisible) {
        taskContainer.classList.add('hidden');
        this.textContent = '👁️ Show Tasks';
        tasksVisible = false;
        console.log("Tasks hidden");
    } else {
        taskContainer.classList.remove('hidden');
        this.textContent = '🙈 Hide Tasks';
        tasksVisible = true;
        console.log("Tasks shown");
    }
});

// ========================================
// 🎉 BONUS: WELCOME MESSAGE ON PAGE LOAD
// ========================================

// This runs when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript Basics Demo loaded successfully! 🎉");
    console.log("Check the console for debug messages as you interact with the page.");
    
    // Set initial theme button text
    document.getElementById('toggleBtn').textContent = '🌙 Dark Theme';
    document.getElementById('hideShowBtn').textContent = '🙈 Hide Tasks';
});

// Program-1 (Simple if..else program)

var age = prompt("Enter your age")

if (age > 18) {
    document.write("You can drive a car...")
    console.log(age)
}

else {
    document.write("You can't drive a car...")
    console.log(age)
}

// Program-2 (Simple if..else ladder program)

var age = prompt("Enter your age")
if (age >= 0 && age <= 5) {
    // document.write("You are Toddler...")
    console.log("You are Toddler...")
}
else if (age >= 6 && age <= 12) {
    // document.write("You are a Child...")
    console.log("You are a Child...")
}

else if (age >= 13 && age <= 19) {
    // document.write("You are a Teenager...")
    console.log("You are a Teenager...")
}

else if (age >= 20 && age <= 59) {
    // document.write("You are an Adult...")
    console.log("You are an Adult...")
}
else if (age >= 60) {
    // document.write("You are senior citizen...")
    console.log("You are senior citizen...")
}
else {
    // document.write("Enter the valid age...")
    console.log("Enter the valid age...")
}


// Program - 3 (Simple Switch Case Program)

let age = prompt("What is your age? ");

switch (age) {
    case '12':
        console.log("Your age is 12");
        break;

    case '13':
        console.log("Your age is 13");
        break;

    case '14':
        console.log("Your age is 14");
        break;

    default:
        dayName = ("Invalid Age...");
        break;
}

// Program - 4 (Simple Ternary Program)

let age = 17
// (conditon) ? True : False
let a = age > 18 ? "You can drive" : "You cannot drive"
console.log(a)


//Program - 5 (For Loop Function to display multiplication table)
let n = prompt("Enter the number you want multiplication table")

for (let i = 1; i <= 10; i++) {
    console.log(n + " X " + i + " = " + i * n);
}

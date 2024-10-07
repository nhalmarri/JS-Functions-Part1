/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName(name) {

    console.log(`${name}`)
}

//Calling the function

printName("Nora")


/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */


function printAge(birthYear) {

    const age = 2024 - birthYear;

    return age
}


console.log(printAge(1996))


/**
 * Task 3:
 * Create a function named `printAgeAndName`
 * - that takes a birth year and your name as parameters,
 * - and prints 'Hello NAME you are AGE years old' on the screen.
 * - Age = current year - birth
 */


function printAgeAndName(birthYear, name) {

    const age = printAge(birthYear)

    return console.log(`Hello ${name} you are ${age} years old`)
}

printAgeAndName(1996, "Nora");


/**
 * Task 4:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello(name, language) {

    if (language === "en") {
        return console.log(`Hello ${name}`)
    } else if (language === "es") {
        return console.log(`Hola ${name}`)
    } else if (language === "fr") {
        return console.log(`Bonjour ${name}`)
    } else if (language === "tr") {
        return console.log(`Merhaba ${name}`)
    }


} //end of printHello Functions 


printHello("Nora", "fr")


/**
 * Task 5:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(x, y) {

    if (x > y) {
        return console.log(x)
    } else {
        return console.log(y)
    }
}

printMax(20, 10)
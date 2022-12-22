// Exercise #1
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <nname>, one for me"
// If no name is provided, it should default to "You"

// twoFer() => "One for you, one for me"
// twoFer() => "One for Elton, one for me"

function someFer(name: string = "one"): string {
  return `One for ${name}, one for me`;
}

// Exercise #2
// Write a isLeapYear() function that accepts a year and returns true/false depending on if the year is a leap year

const isLeapYear = (year: number = 1990): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

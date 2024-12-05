// Chinese Zodiac signs
const zodiac = [
  "Rat", // 0
  "Ox", // 1
  "Tiger", // 2
  "Rabbit", // 3
  "Dragon", // 4
  "Snake", // 5
  "Horse", // 6
  "Goat", // 7
  "Monkey", // 8
  "Rooster", // 9
  "Dog", // 10
  "Pig", // 11
];

// Ask the user to enter a year
let year = prompt("Please enter a year:");

// If the user presses "Cancel" or enters an empty value
if (year === null || year.trim() === "") {
  alert("Please enter a year!");
} else {
  // Convert the year to a number
  year = parseInt(year);

  // Check if the entered value is a valid number
  if (isNaN(year)) {
    alert("Please enter a valid year!");
  } else {
    // Calculate the Chinese Zodiac sign
    const zodiacIndex = (year - 4) % 12;
    const zodiacSign = zodiac[zodiacIndex < 0 ? zodiacIndex + 12 : zodiacIndex];

    // Display the result
    alert(`${year} is the year of the "${zodiacSign}" in the Chinese Zodiac.`);
  }
}

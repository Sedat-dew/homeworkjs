let money = prompt("Hello! How much money do you have?");

if (money === null || money.trim() === "") {
  alert("You didn't enter anything, please try again!");
} else {
  money = parseFloat(money);

  if (isNaN(money)) {
    alert("Please enter a valid amount!");
  } else {
    if (money < 50) {
      alert("You can buy a coffee with this amount.");
    } else if (money < 200) {
      alert("You can enjoy a nice dinner with this amount.");
    } else {
      alert("You can go shopping with this amount!");
    }
  }
}

const PIN_Secret = "1111";
const MAX_TRY = 3;

let count = MAX_TRY;
while (true) {
  const PIN = prompt("Enter PIN");
  count--;
    if (PIN === PIN_Secret) {
  console.log("Thank you!");
    break;
}
if(count===0){
  break;
}
console.log('try again:', count);
}

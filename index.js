// const getSumTwoNumber = function(){
 const userInputNum1 = prompt('Enter first number');
  const userInputNum2 = prompt('Enter second numver');

 const checkUserInput1 = userInputNum1===null || userInputNum1==='' || isNaN(Number(userInputNum1));
  
 const checkUserInput2 = userInputNum2===null || userInputNum2==='' || isNaN(Number(userInputNum2));

//   if(checkUserInput1 || checkUserInput2){
//     console.log('error')
//   }else{
//     console.log(Number(userInputNum1)+Number(userInputNum2))
//   }
// }

// getSumTwoNumber()

const getSumTwoNumber = function(number1, number2){
  return Number(userInputNum1)+Number(userInputNum2);

}


if(checkUserInput1 || checkUserInput2){
  console.log('error')
}else{
  console.log(getSumTwoNumber(Number(userInputNum1),Number(userInputNum2)))
}

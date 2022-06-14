"use strict";

const f1 = function (...restArguments){
  console.log(restArguments)
}

const f2 = (num1,...numbers)=>{
  console.log(numbers)
}


f1(1,1,1,1)
f2(2,2,2,2)

const sumNum = (...num)=> num.reduce((acum,vol)=>acum+vol);

sumNum(3,6,8,7);



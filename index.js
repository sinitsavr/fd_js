function createFamily (){
  const family = {};
  const countMemberFamily = prompt('how much?');
  for(let i=0; i<countMemberFamily; i++){
    const name = prompt ('name?');
    const role = prompt ('role?');
    family[name] = role
  }
  return family
}
console.log(createFamily())
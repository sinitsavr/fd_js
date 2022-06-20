'use strict';
function User(fname, sname, age){
  this.fname = fname;
  this.sname = sname;
  this.age = age;
  //User.count++;
}

User.count = 0; //стастическое свойство

User.createTestUser = ()=> new User('Anonim', 'Amonimus', 22);

User.isUser = function(obj){
  return obj instanceof User;
}

function UserPrototype(){
  this.getFullName = () =>{return `${this.fname} ${this.sname}`};
}

User.prototype = new UserPrototype();

const userOld = new User('Elon','Musk', 50);



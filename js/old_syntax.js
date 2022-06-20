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


class Animal{
  #type;
  constructor (name, type, countOfLegs){
    this.name = name;
    this.type = type;
    this.countOfLegs = countOfLegs;
  }
  get countOfLegs(){
    return this._countOfLegs
  }
  set countOfLegs(value){
  if(value<0 || value>4){
    throw new RangeError('error');
  } 
  this._countOfLegs = value;
}
  eat(){
    return `${this.namre} is eating.`
  }
  static isAnimal(obj){
    return obj instanceof Animal;
  }
};
const cat = new Animal ('Muha', 'cat', 4);
console.log
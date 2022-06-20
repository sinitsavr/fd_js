'use strict';


class User{
  #isBan;
  constructor (fname, sname){
    this.fname = fname;
    this.sname = sname;
    this._isBan = false;
  }
  getFullName(){
    return `${this.fname} ${this.sname}`;
  }
  static isUser(obj){
    return obj instanceof User;
  }
  getisBan(){
    return this._isBan;
  }
};

class Moderator extends User{
  constructor(fname, sname, permission){
    super (fname, sname);
    this.permission = permission;
  }
};
const mod1 = new Moderator('Elon','Musk', true);

class Admin extends Moderator{
  constructor(fname, snama, permission){
    super (fname, snama, permission);
  }
  ban(obj){
    if(User.isUser(obj)===false){
      throw new TypeError('must be user!');
    }
    obj._isBan=true;
  }
  unBan(obj){
    if(User.isUser(obj)===false){
      throw new TypeError('must be user!');
    }
      obj._isBan=false;
  }
};
const admin = new Admin('Elin', 'Dusk', true);

class Editor extends Moderator{
  constructor(fname, sname, permission, email){
    super(fname,sname,permission);
    this.email = email;
  }
}
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
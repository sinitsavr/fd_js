"use strict";

class 
Squirrel{
  constructor (name, color){
   this.name = name;
   this.color = color;
  }
  jump(){
    return `${this.name} is jumping.`
  }
};
class FlySquirrel extends Squirrel{
  constructor(name, color, maxDisatanse){
  super(name,color); 
  this.maxDistanse = maxDistanse;
}
  get maxDistanse(){
    return this._maxDistanse
  }
  set maxDistanse(value){
  if(value>90 || value<70){
    throw new RangeError('error');
  } 
  this._maxDistanse = value;
}
 fly(dist){
  return `${this.name} is ${dist>this._maxDistanse? 'not' : ''} flying at ${dist}.`;
}
};

class MagicFlySquirrel extends FlySquirrel{
  constructor(name, color, maxDisatanse, song){
    super(name, color, maxDisatanse);
    this.song = ['song1', 'song2', 'song3'] ;
  }
  singsong(){
    return
    `${this.name} is singing ${this.song[0,1,2]}`
  }
};
  
  
  const mfsq = new MagicFlySquirrel('belka', 'red', 80,['kaluna','smereka', 'lypa']);
console.log(mfsq(singsong(1)))
"use strict";
class MyArrayClass {
  constructor() {
    this.length = 0;
    for (let i = 0; i < arguments.length; i++) {
      this.push(arguments[i]);
    }
  }
  push(element) {
    this[this.length] = element;
    return ++this.length;
  }
  pop() {
    if (this.length === 0) {
      return;
    }
    const lastElement = this[--this.length];
    delete this[this.length];
    return lastElement;
  }
  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
  //написать метод every
  every(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === false) {
        return false;
      }
    }
    return true;
  }
  //написать метод some
  some(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }
    return false;
  }
  filter(callback) {
    const newMyArr = new MyArrayClass(); //create instanse MyArray
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newMyArr.push(this[i]);
      }
    }
    return newMyArr;
  }
  concat(instanceMyArray) {
    if (MyArrayClass.isMyArrayClass(instanceMyArray) === false) {
      throw new TypeError("need instance MyArrayClass");
    }
    const newMyArr = new MyArrayClass();
    for (let i = 0; i < this.length; i++) {
      newMyArr.push(this[i]);
    }
    for (let i = 0; i < instanceMyArray.length; i++) {
      newMyArr.push(instanceMyArray[i]);
    }
    return newMyArr;
  }
  flat(depth = 1) {
    let newMyArr = new MyArrayClass();
    // for(let i=0; i<this.length; i++){
    //   const isMyArr = MyArrayClass.isMyArrayClass(this[i]);
    //   if(isMyArr && depth){
    //     const subNewMyArray = this[i].flat(depth-1);
    //     newMyArr = newMyArr.concat(subNewMyArray);
    //   }else if(this[i] !== undefined){
    //     newMyArr.push(this[i]);
    //   }
    // }
    this.forEach((elem) => {
      if (MyArrayClass.isMyArrayClass(elem) && depth) {
        newMyArr = newMyArr.concat(elem.flat(depth - 1));
      } else if (elem !== undefined) {
        newMyArr.push(elem);
      }
    });
    return newMyArr;
  }

  static isMyArrayClass(obj) {
    return obj instanceof MyArrayClass;
  }
}

const myArr1 = new MyArrayClass(
  1,
  undefined,
  new MyArrayClass(new MyArrayClass(3, new MyArrayClass(4, 4, 4), 3), 2),
  1
);

console.log(myArr1.flat(2));
const arr1 = [
  1,
  ,
  ,
  ,
  ,
  [2, 2, , , 2, [3, 3, 3, [4, , , , , 4, 4], 3, 3], 2]]
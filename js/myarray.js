//object with data
function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}
//object with logic
function MyArrayPrototype() {
  this.push = function (element) {
    this[this.length] = element;
    return ++this.length;
  };
  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const lastElement = this[--this.length];
    delete this[this.length];
    return lastElement;
  };
  this.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
  //написать метод every
  this.every = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === false) {
        return false;
      }
    }
    return true;
  };
  //написать метод some
  this.some = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }
    return false;
  };
  this.filter = function(callback){
    const newMyArr = new MyArray();//create instanse MyArray
    for(let i=0; i<this.length; i++){
      if(callback(this[i], i, this)){
        newMyArr.push(this[i]);
      }
    }
    return newMyArr;
  }
}
MyArray.prototype = new MyArrayPrototype();
function isOdd (elem) {
  return elem % 2 === 1;
}
const myArr = new MyArray(1,4,2,5,6,8,3,9);//create instanse MyArray
const myArr2 = myArr.filter(isOdd);
console.log(myArr2);
//debugger
const check = myArr.every(isOdd);
console.log(check);
// myArr.forEach(function (elem) {
//   console.log(elem * 2);
// });
//console.log(myArr);
/*-------------------------*/
const arr = [1, 2, 3, 54, 5, 8];
const arr2 = [];

arr2.forEach(function (elem) {
  console.log(elem * 2);
});

// arr.push(55);
// arr2.push(55);
// console.log(arr);
"use strict";

const site = {
  title: 'green site',
  headers:['Header 1','Header 2','Header 3'],
  showHeaders(){
    console.log(this)
    this.headers.forEach((header)=>{
      console.log(`${header} | ${this.title}`)
    });
  }
}

site.showHeaders();
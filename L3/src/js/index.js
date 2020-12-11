import { b } from './lib'
import '../css/index.css'
var a = 1
console.log(a+b);

import $ from 'jquery'
// $("body").css("background-color","yellow")

import lyf from '../assets/img/lyf.jpg'
let img = $('<img>')
img.attr('src',lyf)
$('body').append(img)
import lyf1 from '../assets/img/jt.png'
let img1 = $('<img>')
img1.attr('src',lyf1)
$('body').append(img1)
xx()
function xx() {
  setInterval(()=>{
    console.log('1111');
    
  },5000)
}
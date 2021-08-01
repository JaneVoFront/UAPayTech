import { square, MyClass } from './module'
;(function () {
  'use strict'
  if (document.querySelector('.header__logo')) {
    setTimeout(function () {
      document.querySelector('.header__logo').classList.add('m--show')
    }, 1000)
  }
})()

console.log(square(5))
var cred = {
  name: 'Юрий Кучма!',
  enrollmentNo: 11115078,
}
var x = new MyClass(cred)
console.log(x.getName())

//Tabs
let tabs = document.querySelector('.tabs')
let mitem = tabs.querySelectorAll('.tabs-menu__item')
let citem = tabs.querySelectorAll('.tabs-content__item')
function change(arr, i) {
  arr.forEach( item => {
    item.forEach( i => {i.classList.remove('is-active')})
    item[i].classList.add('is-active')
  })
}
for(let i = 0; i < mitem.length; i++) {
  mitem[i].addEventListener('click', () => {
    change([mitem, citem], i)
  })
}

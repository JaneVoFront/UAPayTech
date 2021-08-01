var tabs = document.querySelector('.tabs')
    mitem = tabs.querySelectorAll('.tabs-menu__item')
    citem = tabs.querySelectorAll('.tabs-content__item')

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
change();
var elOpenBtn = document.querySelector('btn1__opened')
var elOpenBtn2 = document.querySelector('btn2__opened')
var elOpen1 = document.querySelector('btn1__open')
var elOpen2 = document.querySelector('btn2__open')
var elControl = document.querySelector('.control')
var elShadow = document.querySelector('.shadow')



function fnOpen() {
    elShadow.classList.add('.btn1__opened')
    elOpen1.style.display = 'block'
    elShadow.classList.remove('btn2__opened')
}

function fnClose() {
    elShadow.classList.add('btn2__opened')
    elOpen2.style.display = 'block'
    elShadow.classList.remove('.btn1__opened')
}
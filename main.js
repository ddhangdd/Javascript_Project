// console.log(window)

// // Single element
// const form = document.getElementById('my-form')
// console.log(document.querySelector('.container'))
// //multiple element

// console.log(document.querySelectorAll('.h1'))
// const items = document.querySelectorAll('.item')

// items.forEach(item => console.log(item))

// const ul = document.querySelector('.items')
// //ul.remove()
// ul.lastElementChild.textContent = '1111111'

// const btn = document.querySelector('.btn')
// btn.style.background = 'red'

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form')
//     .style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark')
//     ul.innerHTML = '<h1>Helllllo<h1/>'
// })

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault()
    console.log(nameInput.value)

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all field'
        setTimeout(() => msg.remove(), 1000);
    } else{
        console.log('success')
    }
}
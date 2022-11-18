let popup = document.getElementById('popup')
let openBtn = document.querySelector('#openPopup')
let closeBtn = document.querySelector('#closePopup')


openBtn.addEventListener('click', () => {
    popup.classList.add('open-popup')
}) 

closeBtn.addEventListener('click', () => {
    popup.classList.remove('open-popup')
})









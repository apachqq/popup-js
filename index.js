let popup = document.querySelector('.popup')
let openPopupButton = document.querySelector('.button-show')
let closePopupButton = document.querySelector('.button-hide')

openPopupButton.onclick = function (evt) {
    evt.preventDefault()
    popup.classList.add('popup--open')
}

closePopupButton.onclick = function () {
    popup.classList.remove('popup--open')
}


// var buttons = document.querySelectorAll('.spoiler button')
// for ( var i = 0; i < buttons.length; i++) {
//     var button = buttons[i]
//     button.addEventListener('click', function () {
//     this.nextElementSibling.classList.add('spoiler-content-visible')
//     this.parentNode.removeChild(this)
//     })
// }

var elements = document.querySelectorAll('.spoiler')

var createSpoilerButton = function (element) {
    
    // On crée la span.spoiler-content
    var span = document.createElement('span')
    span.className = 'spoiler-content'
    span.innerHTML = element.innerHTML
    
    // On crée le bouton 
    var button = document.createElement('button')
    button.textContent = 'Afficher le spoiler'
    
    // On ajoute les élément au DOM
    element.innerHTML = ''
    element.appendChild(button)
    element.appendChild(span)
    
    // On met l'écouteur au click
    button.addEventListener('click', function () {
        button.parentNode.removeChild(button)
        span.classList.add('spoiler-content-visible')
    })
}

for(var i = 0; i < elements.length; i++){
    createSpoilerButton(elements[i])
}
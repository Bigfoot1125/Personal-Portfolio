export function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if(url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
 }
  
 export function removeChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
 }
  
 export function addStarField(element, numStars) {
    element.style.setProperty('background-color', 'black')
    for (let i = 0; i <numStars; i++) {
        let star = document.createElement('div')
        star.style.setProperty('position', 'absolute')
        star.style.setProperty('width', '2px')
        star.style.setProperty('height', '2px')
        star.style.setProperty('background-color', 'blue')
        let xy = getRandomPosition()
        star.style.left = xy[0] + `${xy[0]}px`
        star.style.top = xy[0] + `${xy[1]}px`
        element.appendChild(star)
    }
 }
 function getRandomPosition() {
    let y = window.height
    let x = window.innerWidth
    let randomY = Math.floor(Math.random() * y)
    let randomX = Math.floor(Math.random() * x)
    return [randomX, randomY]
 }
 
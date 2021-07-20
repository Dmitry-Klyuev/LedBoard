const board = document.querySelector('#board')
const squaresNumber = 500
const colors = ['red', 'green', 'aquamarine', 'gold', 'blueviolet']

for (let i = 0; i < squaresNumber; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = getRandomColor()
        square.style.boxShadow = `0 0 2px ${getRandomColor()}, 0 0 10px ${getRandomColor()}`
    })
    square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = '#1d1d1d';
        square.style.boxShadow = '0 0 2px #000'
    })
    board.append(square)
}

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}


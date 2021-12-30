const add = function(ar) {
	return ar.length ? ar.reduce((a, b) => a + b) : 0
};

const subtract = function(ar) {
	return ar.length ? ar.reduce((a, b) => a - b) : 0
};

const multiply = function(ar) {
    return ar.length ? ar.reduce((a, b) => a * b) : 0
  };

const divide = function(ar) {
    return ar.length ? ar.reduce((a, b) => a / b) : 0
};

const numButtons = document.querySelector('#number-btns')

for (i=0; i<10; i++) {
    const numButton = document.createElement('button')
    numButton.textContent = i

    numButtons.appendChild(numButton)

    numButton.addEventListener('click', function() {
        const lastValue = inputArray.pop()
        if (isNaN(lastValue)) {
            inputArray.push(lastValue)
            inputArray.push(numButton.innerText)
        } else {
            if (parseInt(lastValue) === 0) {
                inputArray.push(numButton.innerText)
            } else {
                inputArray.push(lastValue.toString() + numButton.innerText)
            }
        }
        updateScreen()
    })
}

let inputArray = [0]

const clearScreen = document.querySelector('#clear')
clearScreen.addEventListener('click', function() {
    inputArray = [0]
    updateScreen()
})

const opButtons = document.querySelector('#operators')

Array.from(opButtons.querySelectorAll('button')).map(opButton => {
    opButton.addEventListener('click', function() {
        switch (opButton) {
            case document.querySelector('#add-btn'):
                newOperator('add')
                break
            case document.querySelector('#sub-btn'):
                newOperator('subtract')
                break
            case document.querySelector('#mult-btn'):
                newOperator('multiply')
                break
            case document.querySelector('#divi-btn'): 
                newOperator('divide')
                break
            case document.querySelector('#eq-btn'): 
                inputArray = [operate(inputArray[1], parseInt(inputArray[0]), parseInt(inputArray[2]))]
                break
        }
        updateScreen()
    })
})

function newOperator(op) {
    const lastValue = inputArray.pop()
    if (isNaN(lastValue)) {
        inputArray.push(op)
    } else if (inputArray.length > 1) {
        const result = operate(inputArray[1], parseInt(inputArray[0]), parseInt(lastValue))
        inputArray = [result, op]
    } else {
        inputArray.push(lastValue)
        inputArray.push(op)
    }
}

function operate(op, x, y) {
    switch (op) {
        case 'add': 
            return add([x, y])
        case 'subtract':
            return subtract([x, y])
        case 'multiply':
            return multiply([x, y])
        case 'divide':
            return divide([x, y])
    }
};

function updateScreen() {
    let lastValue = inputArray[inputArray.length - 1] 
    if (isNaN(lastValue)) {
        lastValue = inputArray[inputArray.length - 2] 
    }

    const screen = document.querySelector('#screen')
    screen.innerText = Math.round(lastValue * 10000) / 10000

}
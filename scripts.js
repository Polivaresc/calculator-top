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

const numberBtns = document.querySelector('#number-btns')

for (i=0; i<10; i++) {
    const numButton = document.createElement('button')
    numButton.textContent = i

    numberBtns.appendChild(numButton)
}



let displayValues = []

Array.from(numberBtns.querySelectorAll('button')).map(numButton => {
        numButton.addEventListener('click', function() {
            displayValues.push(numButton.innerText)
            console.log(displayValues)
        })
    })

const clearDisplay = document.querySelector('#clear')
clearDisplay.addEventListener('click', function() {
    displayValues = []
    console.log(displayValues)
})

function operate(op, x, y) {
    switch (op) {
        case 'add': 
            add([x, y])
            break
        case 'subtract':
            subtract([x, y])
            break
        case 'multiply':
            multiply([x, y])
            break
        case 'divide':
            divide([x, y])
            break
    }
};

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

const container = document.querySelector("#container")

for (i=0; i<10; i++) {
    const numButton = document.createElement("button")
    numButton.textContent = i

    container.appendChild(numButton)

}

function operate(op, x, y) {

};
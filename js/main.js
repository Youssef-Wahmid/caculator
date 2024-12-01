let nbr = document.querySelectorAll('.nbr');
let operation = document.querySelectorAll('.operat');
let functions = document.querySelectorAll('.func');
let btnEgale = document.querySelector('.btngale');
let nbr1 = document.querySelector('.nbr1');
let op = document.querySelector('.op');
let nbr2 = document.querySelector('.nbr2');
let affRes = document.querySelector('.affichage');
let res = 0;

function somme(nbr1, nbr2) {
    return nbr1 + nbr2;
}

function division(nbr1, nbr2) {
    return nbr2 === 0 ? "error math" : nbr1 / nbr2;
}

function multiplication(nbr1, nbr2) {
    return nbr1 * nbr2;
}

function sousTraction(nbr1, nbr2) {
    return nbr1 - nbr2;
}

function modulo(nbr1, nbr2) {
    return nbr1 % nbr2;
}

function cosine(value) {
    return Math.cos(value);
}

function sine(value) {
    return Math.sin(value);
}

function tangent(value) {
    return Math.tan(value);
}

function squareRoot(value) {
    return value < 0 ? "error math" : Math.sqrt(value);
}

function operate(nbr1, nbr2) {
    switch (op.innerHTML) {
        case '+': return somme(nbr1, nbr2);
        case '-': return sousTraction(nbr1, nbr2);
        case '*': return multiplication(nbr1, nbr2);
        case '/': return division(nbr1, nbr2);
        case '%': return modulo(nbr1, nbr2);
    }
}

functions.forEach(func => {
    func.addEventListener("click", function() {
        let inputValue = Number(nbr1.innerHTML);
        switch (func.innerHTML) {
            case "cos": res = cosine(inputValue); break;
            case "sin": res = sine(inputValue); break;
            case "tan": res = tangent(inputValue); break;
            case "√": res = squareRoot(inputValue); break;
        }
        affRes.innerHTML = res;
        nbr1.innerHTML = res;
        nbr2.innerHTML = "";
        op.innerHTML = "";
    });
});

nbr.forEach(value => {
    value.addEventListener("click", function() {
        if (op.innerHTML) {
            nbr2.innerHTML += value.innerHTML;
        } else {
            nbr1.innerHTML += value.innerHTML;
        }
    });
});

operation.forEach(value => {
    value.addEventListener("click", function() {
        if (!op.innerHTML) {
            op.innerHTML = value.innerHTML;
        } else if (nbr2.innerHTML) {
            res = operate(Number(nbr1.innerHTML), Number(nbr2.innerHTML));
            affRes.innerHTML = res;
            nbr1.innerHTML = res;
            nbr2.innerHTML = "";
            op.innerHTML = value.innerHTML;
        }
    });
});

btnEgale.addEventListener("click", function() {
    if (nbr2.innerHTML) {
        res = operate(Number(nbr1.innerHTML), Number(nbr2.innerHTML));
        affRes.innerHTML = res;
        nbr1.innerHTML = res;
        nbr2.innerHTML = "";
        op.innerHTML = "";
    }
});

document.querySelector('.vider').addEventListener("click", function() {
    nbr1.innerHTML = "0";
    nbr2.innerHTML = "";
    op.innerHTML = "";
    affRes.innerHTML = "0";
});

document.querySelector('.delete').addEventListener("click", function() {
    if (nbr2.innerHTML) {
        nbr2.innerHTML = nbr2.innerHTML.slice(0, -1);
    } else if (op.innerHTML) {
        op.innerHTML = "";
    } else {
        nbr1.innerHTML = nbr1.innerHTML.slice(0, -1);
    }
});

// Changer le thème sombre/clair
const themeToggle = document.getElementById("toggle-theme");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    themeToggle.textContent = document.body.classList.contains("light-mode")
        ? "🌞"
        : "🌙";
});

const display = document.querySelector('.affichage');
const dotButton = document.querySelector('.dot');

dotButton.addEventListener('click', () => {
    let currentValue = display.textContent;
    
    if (!currentValue.includes('.')) {
        display.textContent += '.'; 
    }
});

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.value);
        if (result === undefined) result = "";
        display.value = result;
    } catch (err) {
        display.value = "Error";
        setTimeout(() => clearDisplay(), 1000);
    }
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const action = btn.dataset.action;
        const value = btn.dataset.value;

        if (action === "clear") clearDisplay();
        else if (action === "back") backspace();
        else if (action === "equal") calculate();
        else if (value) appendToDisplay(value);
    });
});

document.addEventListener("keydown", e => {
    if ((e.key >= 0 && e.key <= 9) || ["+", "-", "*", "/", "."].includes(e.key)) {
        appendToDisplay(e.key);
    } else if (e.key === "Enter") {
        e.preventDefault();
        calculate();
    } else if (e.key === "Backspace") {
        backspace();
    } else if (e.key === "Escape") {
        clearDisplay();
    }
});
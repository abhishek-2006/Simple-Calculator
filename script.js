function clearScreen() {
    document.getElementById("result").value = "";
}

function appendValue(value) {
    document.getElementById("result").value += value;
}

function deleteChar() {
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1); // Removes the last character
}

function calculate() {
    try {
        const result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result || "0";
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

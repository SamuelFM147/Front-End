let resultCalculated = false



function addToDisplay(value) {
    if(resultCalculated){
        clearDisplay();
        resultCalculated = false
    }
    document.getElementById('display').value += value;
}

function calculateResult() {
    try {
        let expression = document.getElementById('display').value;
        
        
        let result = new Function('return ' + expression)();
        
        
        document.getElementById('display').value = result;

        resultCalculated = true;
    } catch {
        document.getElementById('display').value = 'Erro';
        resultCalculated = true;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}


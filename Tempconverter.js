function convertTemperature() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;
    const resultText = document.getElementById('resultText');

    let result;

    // Convert temperature based on selected units
    if (unitFrom === unitTo) {
        result = tempInput; // No conversion needed if units are the same
    } else if (unitFrom === 'Celsius') {
        if (unitTo === 'Fahrenheit') {
            result = (tempInput * 9/5) + 32;
        } else if (unitTo === 'Kelvin') {
            result = tempInput + 273.15;
        }
    } else if (unitFrom === 'Fahrenheit') {
        if (unitTo === 'Celsius') {
            result = (tempInput - 32) * 5/9;
        } else if (unitTo === 'Kelvin') {
            result = (tempInput - 32) * 5/9 + 273.15;
        }
    } else if (unitFrom === 'Kelvin') {
        if (unitTo === 'Celsius') {
            result = tempInput - 273.15;
        } else if (unitTo === 'Fahrenheit') {
            result = (tempInput - 273.15) * 9/5 + 32;
        }
    }

    // Display the result
    resultText.textContent = ${tempInput} ${unitFrom} is equal to ${result.toFixed(2)} ${unitTo};
}
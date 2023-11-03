document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature");
    const conversionTypeSelect = document.getElementById("conversionType");
    const convertButton = document.getElementById("convertButton");
    const result = document.getElementById("result");
    const convertedTemperature = document.getElementById("convertedTemperature");
    const convertedUnit = document.getElementById("convertedUnit");

    convertButton.addEventListener("click", () => {
        const temperatureValue = parseFloat(temperatureInput.value);
        const conversionType = conversionTypeSelect.value;

        if (!isNaN(temperatureValue)) {
            if (conversionType === "celsius") {
                convertedTemperature.textContent = convertToCelsius(temperatureValue).toFixed(2);
                convertedUnit.textContent = "°C";
            } else if (conversionType === "fahrenheit") {
                convertedTemperature.textContent = convertToFahrenheit(temperatureValue).toFixed(2);
                convertedUnit.textContent = "°F";
            } else if (conversionType === "kelvin") {
                convertedTemperature.textContent = convertToKelvin(temperatureValue).toFixed(2);
                convertedUnit.textContent = "K";
            }

            result.style.display = "block";
        } else {
            alert("Please enter a valid temperature.");
        }
    });

    function convertToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    function convertToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    function convertToKelvin(celsius) {
        return celsius + 273.15;
    }
});

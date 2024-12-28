// BMI Calculator Project
// ************************


// Dom Elements Selection
const $ = document
const weightInp = $.getElementById('weight')
const heightInp = $.getElementById('height')
const resultElem = $.getElementById('result')
const categoryElem = $.getElementById('category')
const weightValElem = $.getElementById('weight-val')
const heightValElem = $.getElementById('height-val')
let result;


// Function when starting onchange
function calculate() {
    weightValElem.innerHTML = weightInp.value + ' kg'
    heightValElem.innerHTML = heightInp.value + ' cm'

    heightToMeter = heightInp.value / 100

    result = ((weightInp.value / (Math.pow(heightToMeter, 2)))).toFixed(1)
    resultElem.innerHTML = result

    if (result < 18.5) {
        resultElem.style.color = 'rgb(255, 238, 0)'
        categoryElem.innerHTML = 'Under Weight'
    } else if (result >= 18.5 && result <= 24.9) {
        resultElem.style.color = '#0be881'
        categoryElem.innerHTML = 'Normal Weight'
    } else if (result >= 25 && result < 29.9) {
        resultElem.style.color = 'orange'
        categoryElem.innerHTML = 'Over Weight'
    } else {
        resultElem.style.color = 'red'
        categoryElem.innerHTML = 'Obese'
    }
}

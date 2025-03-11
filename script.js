/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById('input');
const convBtn = document.getElementById('btn');
const out1 = document.getElementById('mToFeet');
const out2 = document.getElementById('lToGallons');
const out3 = document.getElementById('kgToPounds');

convBtn.addEventListener('click', ()=>{
    let inputValue = inputEl.value 
    
    const metersToFt = (inputValue * 3.281).toFixed(3);
    const lToGallons = (inputValue * 0.264).toFixed(3);
    const kgToPounds = (inputValue * 2.204).toFixed(3);
    
    out1.textContent = `${inputValue} meters = ${metersToFt} feet | ${metersToFt} feet = ${inputValue} meters`;
    out2.textContent = `${inputValue} liters = ${lToGallons} gallons | ${lToGallons} gallons = ${inputValue} liters`;
    out3.textContent = `${inputValue} kilos = ${kgToPounds} pounds | ${kgToPounds} pounds = ${inputValue} kilos`;
})
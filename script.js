/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById('input');
const convBtn = document.getElementById('btn');
let out1 = document.getElementById('mToFeet');
let out2 = document.getElementById('lToGallons');
let out3 = document.getElementById('kgToPounds');

convBtn.addEventListener('click', ()=>{
    let inputValue = inputEl.value 

    
    const metersToFt = (inputValue * 3.281).toFixed(3);
    const lToGallons = (inputValue * 0.264).toFixed(3);
    const kgToPounds = (inputValue * 2.204).toFixed(3);
    
    

    if(inputValue == 1){
        out1.textContent = `${inputValue} meter = ${metersToFt} foot | ${metersToFt} foot = ${inputValue} meter`;
        out2.textContent = `${inputValue} liter = ${lToGallons} gallon | ${lToGallons} gallon = ${inputValue} liter`;
        out3.textContent = `${inputValue} kilo = ${kgToPounds} pound | ${kgToPounds} pound = ${inputValue} kilo`;
    }else{
        out1.textContent = `${inputValue} meters = ${metersToFt} feet | ${metersToFt} feet = ${inputValue} meters`;
        out2.textContent = `${inputValue} liters = ${lToGallons} gallons | ${lToGallons} gallons = ${inputValue} liters`;
        out3.textContent = `${inputValue} kilos = ${kgToPounds} pounds | ${kgToPounds} pounds = ${inputValue} kilos`;
    }

    /* out1.textContent = `${inputValue} meters = ${metersToFt} feet | ${metersToFt} feet = ${inputValue} meters`;
    out2.textContent = `${inputValue} liters = ${lToGallons} gallons | ${lToGallons} gallons = ${inputValue} liters`;
    out3.textContent = `${inputValue} kilos = ${kgToPounds} pounds | ${kgToPounds} pounds = ${inputValue} kilos`; */
})


/* darkmode theme */
let darkmode = localStorage.getItem('darkmode');
const btnTheme = document.getElementById('theme-switch');

const enableDarkmode = () =>{
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkmode = () =>{
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

if(darkmode === 'active') enableDarkmode();

btnTheme.addEventListener('click', ()=>{
    darkmode = localStorage.getItem('darkmode')
    darkmode !== 'active' ? enableDarkmode() : disableDarkmode()
})





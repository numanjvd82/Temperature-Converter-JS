// Defining my Vars
const button = document.querySelector('.submit-button');
const results = document.querySelector('#results');

const celsiusInput = document.querySelector('.input');

const fahrenheitOutput = document.getElementById('result-output');


// Event Listeners
button.addEventListener('click', calculation);

// Event Listeners Function
function calculation(e) {
   const celsiusTemp = parseFloat(celsiusInput.value);
   const fahrenhietTemp = (celsiusTemp * (9/5))+ 32;
   fahrenheitOutput.value = fahrenhietTemp.toFixed(2);
   // console.log(fahrenhietTemp.e.target);

   // displaying results 
   results.style.display = 'block';
   
   // setTimeout for Results
   setTimeout(hideResults, 6000);
   function hideResults() {
    results.style.display = 'none';
   }
   
   e.preventDefault();
};
// document.getElementById('tip-form').onchange = function () {
//     const bill = document.getElementById('totalBill').value;
//     const tip = document.getElementById('tipInput').value;
//     const tipoutput = document.getElementById('tipOutput');
//     const tipamount = document.getElementById('tipAmount');
//     const totalbill = document.getElementById('totalBillWithTip');
//     const result = document.getElementById('results');

//     const tipvalue = bill * (tip / 100);
//     const finalbill = bill + tipvalue;

//     tipamount.value = tipvalue.toFixed(2);
//     totalbill.value = finalbill.toFixed(2);

//     tipoutput.innerHTML = `${tip}%`;
//     result.style.display = 'block';
// }

document.querySelector('#tip-form').onchange = function () {
	// Selecting Elements
	const bill = Number(document.querySelector('#totalBill').value);
	const tip = document.querySelector('#tipInput').value;
	const tipOutput = document.querySelector('#tipOutput');
	const tipAmount = document.querySelector('#tipAmount');
	const totalBillWithTip = document.querySelector('#totalBillWithTip');
	const results = document.querySelector('#results');

	// Calculation
	const tipValue = bill * (tip / 100);
	const finalBill = bill + tipValue;

	tipAmount.value = tipValue.toFixed(2);
	totalBillWithTip.value = finalBill.toFixed(2);

	// Showing Results
	tipOutput.innerHTML = `${tip}%`;
	results.style.display = 'block';
};

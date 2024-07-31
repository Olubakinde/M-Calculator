// script.js

function calculateMortgage() {
    // Get input values
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
    const loanTerm = parseFloat(document.getElementById('loan-term').value) * 12;

    // Validate inputs
    const inputs = document.querySelectorAll('input');
    let valid = true;

    inputs.forEach(input => {
        if (!input.value || input.value <= 0) {
            input.classList.add('is-invalid');
            valid = false;
        } else {
            input.classList.remove('is-invalid');
        }
    });

    if (!valid) {
        return; // Exit if inputs are invalid
    }

    // Mortgage calculation
    const x = Math.pow(1 + interestRate, loanTerm);
    const monthlyPayment = (loanAmount * interestRate * x) / (x - 1);
    const totalPayment = monthlyPayment * loanTerm;
    const totalInterest = totalPayment - loanAmount;

    // Update results
    document.getElementById('monthly-payment').textContent = monthlyPayment.toFixed(2);
    document.getElementById('total-payment').textContent = totalPayment.toFixed(2);
    document.getElementById('total-interest').textContent = totalInterest.toFixed(2);

    // Show results and hide image
    document.getElementById('image-section').classList.add('d-none');
    document.getElementById('results-section').classList.remove('d-none');
    document.getElementById('results-section').classList.add('show');
}

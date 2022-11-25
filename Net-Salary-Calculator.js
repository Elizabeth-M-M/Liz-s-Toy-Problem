// MONTHLY NET SALARY CALCULATION
// Individual to manually fill in the first four variables
    // To check why prompts are not working

let mortgageInterest = 15000;
    // prompt("What was your monthly mortgage interest?")
let pensionContribution = 5000;
    // prompt("What was your monthly pension contribution?");
let grossSalary = 115000;
    // prompt("What was your monthly gross salary?");
let insuranceRelief = 0;
    // prompt("What was your monthly insurance relief?");

// This variable does not change
const personalRelief = 2400;


// monthly net salary calculation
function monthlyNetSalary() {
    let salary = grossSalary - taxPayable();
    console.log(`Your net monthly salary is ${salary}`);
    return salary;
}

// tax payable calculation
function taxPayable() {
    let tax = calculatePAYE() - personalRelief - insuranceRelief;
    console.log (`Your monthly tax payable is ${tax}`)
    return tax;
}

// PAYE from basic salary
function calculatePAYE() {
    let taxableIncome = totalTaxableIncome();
    switch (true) {
        case taxableIncome > 33233:
            return ((10 / 100 * 24000) + ((32333 - 24001) * 25 / 100) + ((taxableIncome - 32333) * 30 / 100));
            break;
        case taxableIncome > 24000:
            return ((10 / 100 * 24000) + ((taxableIncome - 24001) * 25 / 100));
            break;
        case taxableIncome <= 24000:
            return ((10 / 100 * (24000 - taxableIncome)));
    }
}


function totalTaxableIncome() {
    let allowableDeductions = mortgageInterest + pensionContribution;
    let taxableIncome = grossSalary - allowableDeductions;
    return taxableIncome
}

console.log(monthlyNetSalary());

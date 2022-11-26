// MONTHLY NET SALARY CALCULATION

// Only change the values of person.key below except the ones with 'do not change'
const person = {
    name: "Elizabeth Mwende",
    basicSalary: 10000,
    mortgageInterest : 0,
    pensionContribution : 0,
    commission : 5000,
    allowances :0,
    personalRelief : 2400, //do not change
    NSSFPensionOldRate : 400 //do not change
}
// Only change the values of person.key above except the ones with 'do not change'


// gross salary  = basic salary + commission + allowances
const grossSalary = person.basicSalary + person.allowances + person.commission;

// Allowable deductions= pension contribution + mortgage
const allowableDeductions = person.mortgageInterest + person.pensionContribution;

// Taxable income = gross salary- allowable deductions;
const taxableIncome = grossSalary - allowableDeductions;

const insuranceRelief = NHIFCalculator();

// PAYE requires input of taxable income(totalTaxableIncome());
function calculatePAYE() {
    switch (true) {
        case taxableIncome > 33233:
            return ((10 / 100 * 24000) + ((32333 - 24001) * 25 / 100) + ((taxableIncome - 32333) * 30 / 100));
            break;
        case taxableIncome > 24000:
            return ((10 / 100 * 24000) + ((taxableIncome - 24001) * 25 / 100));
            break;
        case taxableIncome <= 24000:
            return 0;
    }
}
// Tax payable = PAYE - personal relief;
function taxPayable() {
    let PAYE = calculatePAYE();
    if (PAYE === 0) {
        return 0
    } else {
        return PAYE - person.personalRelief;
    }
}

// NHIF reruires gross salary input
function NHIFCalculator() {
    return (grossSalary >= 100000 ? 1700 :
            grossSalary >= 90000 ? 1600 :
            grossSalary >= 80000 ? 1500 :
            grossSalary >= 70000 ? 1400 :
            grossSalary >= 60000 ? 1300 :
            grossSalary >= 50000 ? 1200 :
            grossSalary >= 45000 ? 1100 :
            grossSalary >= 40000 ? 1000 :
            grossSalary >= 35000 ? 950 :
            grossSalary >= 30000 ? 900 :
            grossSalary >= 25000 ? 850 :
            grossSalary >= 20000 ? 750 :
            grossSalary >= 15000 ? 600 :
            grossSalary >= 12000 ? 500 :
            grossSalary >= 8000 ? 400 :
            grossSalary >= 6000 ? 300 :150
            );
}

// Monthly net salary calculation = gross salary - tax-insurance relief(NHIF)- NSSF;
function monthlyNetSalary() {
    messageSummary();
    let salary = grossSalary - taxPayable() - insuranceRelief - person.NSSFPensionOldRate;
    console.log(`Your net salary is ${salary}`);
    return salary;
}
// With messageSummary(), it prints a summary of some specific outputs. You are able to calculate your net salary using this formula (gross salary - NHIF-NSSF-tax)
function messageSummary() {
    let tax = taxPayable();
    console.log(`Dear, ${person.name}`)
    console.log(`Your gross salary is ${grossSalary}`);
     console.log(`Your NHIF contribution is ${insuranceRelief}`);
    console.log(`Your NSSF contribution is ${person.NSSFPensionOldRate}`);
    console.log (`Your monthly tax is ${tax}`)
  
}
console.log(monthlyNetSalary());



// MONTHLY NET SALARY CALCULATION

// Only change the values of variable person.key
const person = {
    name: "Elizabeth Mwende",
    grossSalary : 400000,
    mortgageInterest : 6000,
    pensionContribution : 1000,
    commission : 0,
    allowances :0,
    personalRelief : 2400,
    NSSFPensionOldRate : 400
}
// Only change values above


const insuranceRelief = NHIFCalculator();

// Monthly net salary calculation = gross salary - tax-insurance relief(NHIF)- NSSF;
function monthlyNetSalary() {
    messageSummary();
    let salary = person.grossSalary - taxPayable() - insuranceRelief - person.NSSFPensionOldRate;
    console.log(`Your net salary is ${salary}`);
    
    return salary;
}

// Taxable income = gross salary + allowances + commissions - allowable deductions;

// Allowable deductions= pension contribution + mortgage

function totalTaxableIncome() {
    let allowableDeductions = person.mortgageInterest + person.pensionContribution;
    let taxableIncome = person.grossSalary + person.allowances + person.commission - allowableDeductions;
    return taxableIncome
}

// PAYE requires input of taxable income(totalTaxableIncome());
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
            return 0;
    }
}
// Tax payable = PAYE - personal relief;
function taxPayable() {
    let PAYE = calculatePAYE();
    if (PAYE === 0) {
        return 0
    } else {
        return PAYE - - person.personalRelief;
    }
}

// NHIF reruires gross salary input
function NHIFCalculator() {
    let gss = person.grossSalary;
    return (gss >= 100000 ? 1700 :
            gss >= 90000 ? 1600 :
            gss >= 80000 ? 1500 :
            gss >= 70000 ? 1400 :
            gss >= 60000 ? 1300 :
            gss >= 50000 ? 1200 :
            gss >= 45000 ? 1100 :
            gss >= 40000 ? 1000 :
            gss >= 35000 ? 950 :
            gss >= 30000 ? 900 :
            gss >= 25000 ? 850 :
            gss >= 20000 ? 750 :
            gss >= 15000 ? 600 :
            gss >= 12000 ? 500 :
            gss >= 8000 ? 400 :
            gss >= 6000 ? 300 :150
            );
        
}

function messageSummary() {
    let tax = taxPayable();
    console.log(`Dear, ${person.name}`)
    console.log(`Your gross salary is ${person.grossSalary}`);
     console.log(`Your NHIF contribution is ${insuranceRelief}`);
    console.log(`Your NSSF contribution is ${person.NSSFPensionOldRate}`);
    console.log (`Your monthly tax is ${tax}`)
  
}
// From the console output, you are able to calculate your net salary using this formula (gross salary - NHIF-NSSF-tax)
console.log(monthlyNetSalary());
// console.log(totalTaxableIncome());
// console.log(calculatePAYE())

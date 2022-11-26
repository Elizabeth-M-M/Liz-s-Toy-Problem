# Liz-s-Toy-Problem Challenge
### Owner
Programs by Elizabeth Mwende Muthusi
### Date
26/nov/2022.

## Challenge 1: Student Grade Generator

### About the program
A prompt will request one to input student's marks.
Marks should be between 0 and 100.
The grade output would be as follows:(  A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40).
If you put invalid marks other than a number or a number greater than 100 or less than 0, you'll be alerted and have to restart the program to input the marks.

### Set up
My program would be calling the `checkGrade()` function, which in turn first calls the `inputMarks()` function.
The `inputMarks()` function works by prompting a user to input his or her marks. If the marks after parsing to integer is a valid number and if the number is between 0 and 100, the number is assigned to the marks variable in the `checkGrade()` function. Otherwise, if they are invalid, the user will be alerted to adjust the parameters and run the program again.
The `checkGrade()` function has assigned the value from the `inputMarks()` function to the marks variable, which is then passed through a switch statement and a grade is returned and a statement printed with the corresponding marks.

## Speed Detector

### About the program
An input of car's speed is required.
The speed limit is set at 70.
It prints "Ok" if speed of car is less than speed limit.
For every 5km/s above the speed limit, it gives the driver one demerit point.
It finally prints out the demerit points or "License is suspended" if above 12.

### Set up
The program is run by calling the `speedDemeritPoint()` function with an argument of the current speed, which is then passed into the function.
The program also has one constant expression of 70, which is assigned to a constant variable of speedLimit.
The `speedDemeritPoint()` function checks the current speed passed in if statements.
If the speed is less than 70, the speed limit, then it returns "Ok" and prints out `You are below the speed limit. Thank you for observing safety.`.
If the speed is above 70, it calculates the demerit points by calculating first overspeed by subtracting 70 from the current speed. The demerit points are then calculated using overspeed divided by 5.
If the demerit points are less than 12, it returns the demerit points and prints out `You have ... demerit points!`, but if above, it returns "License is suspended" and prints out `You are driving way above the speed limit. Your license is suspended!`.

## Net Salary Calculator

### About the program
The program calculates a net salary of a person.
The inputs required are basic salary, benefits, PAYE, NHIF deductions, NSSF deductions, gross salary and net salary.

### Set up

#### The person object
The program requires the user to input values in the `person` object.
The values to be modified are for the keys(`person.key`): name, basic salary, commission, allowances, pension contribution and mortgage interest.
Note that no key should be modified, only the values of the key.
Aside from the name key the requires a string input, the rest of the inputs should be in numbers
If the user has no input, he/she should put 0;

#### Running the program
The user calls the `monthlyNetSalary()` function, which prints out the components of calculating the net salary and returns the net salary.
Most data, for example for the NHIF, PAYE and NSSF calculation, is sourced from this website; https://www.aren.co.ke/payroll/taxrates.htm#PAYE
The assumption formula gathered is:
`monthlyNetSalary()` function:
    net salary = gross salary - tax(PAYE)- insurance relief(NHIF)- NSSF.
The components of this program includes breaking down compontents of the formula.

Gross salary = basic salary + commission + allowances
PAYE requires input of taxable income. 
    Taxable income = gross salary- allowable deductions.
        Allowable deductions = pension contribution + mortgage.
        Gross salary was calculated above.
Insurance relief requires gross salary as input and passed through a ternary operator.
NSSF is constant as provided.




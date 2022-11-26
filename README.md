# Liz-s-Toy-Problem Challenge
### Owner
-programs by Elizabeth Mwende Muthusi
### Date
-25/ nov/ 2022.

## Challenge 1: Student Grade Generator
### About the program
-A prompt will request one to input student's marks.
-Marks should be between 0 and 100.
-The grade output would be as follows:(  A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40).
-If you put invalid marks other than a number or a number greater than 100 or less than 0, you'll be alerted and have to restart the program to input the marks.

### Set up
-My program would be calling the checkGrade() function, which in turn first calls the inputGrade()function.
-The inputGrade() function works by prompting a user to input his or her marks. If the marks after parsing to integer is a valid number and if the number is between 0 and 100, the number is assigned to the marks variable in the checkGrade() function. Otherwise, if they are invalid, the user will be alerted to adjust the parameters and run the program again.
-The checkGrade() function has assigned the value from the inputGrade() function to the marks variable, which is then passed through a switch statement and a grade is returned and a statement printed with the corresponding marks.



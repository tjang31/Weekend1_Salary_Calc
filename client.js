/* jshint esversion: 6 */
let budget = 20000;
let expenses = [];

class Expense{
  constructor( firstName, lastName, id, title, salary ){
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.title = title;
    this.salary = salary;
  } // end constructor
} // end class Expense

$(document).ready( function(){
  $( '#submitButton' ).on('click', function(){
    console.log('submitButton');
    // get user: firstNameIn, lastNameIn, ID, title, salary
    //create new expense
    // push new expense into expenses
    let newExpense = new Expense( $('#firstNameIn').val(), $('#lastNameIn').val(), $('#idNumber').val(), $('#titleIn').val(), $('#salaryIn').val() );
    expenses.push( newExpense );
    updateExpenses();
  }); // end submitButton on click
  // init page
  $( '#budgetDiv' ).append( '<h2>Budget: $' + budget.toFixed( 2 ) +'</h2>');
}); // end doc readys

function updateExpenses(){
  console.log( 'in updateExpenses' );
  // start totalExpenses at 0
  let totalExpenses = 0;
  // loop through expenses and display expenses on DOM
  let outputElement = $('#infoTable');
  for( expense of expenses ) {
    let newRow = ( '<tr><td>' + expense.firstName + '<td>' + expense.lastName + '<td>' + expense.id + '<td>' + expense.title + '<td>' + expense.salary + '</td></tr>' );
    outputElement.append( newRow );
    console.log( expense );
    expenses.pop();
    totalExpenses += Number( expense.salary );
  } // end for of loop
  console.log( 'totalExpenses', totalExpenses);
  updateRemainingBudget( totalExpenses );
} // end function updateExpense

function updateRemainingBudget( allMoney ){
  console.log( 'in updateRemainingBudget', allMoney);
  let remainingBudget = budget - allMoney;
  console.log( 'remainingBudget', remainingBudget);
  let outputSalary = $('#outputSalary');
  outputSalary.empty();
  outputSalary.append( '<h2>Remaining budget = $' + remainingBudget.toFixed( 2 ) + '</h2>' );
  if( remainingBudget < 0 ){
    outputSalary.css( 'background-color', 'red' );
  }
} // end function updateRemainingBudget
// Math isn't calculating correctly after all inputs. 

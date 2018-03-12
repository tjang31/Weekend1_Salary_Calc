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
  // loop through expenses and display expenses on DOM
  let outputElement = $('#infoTable');
  for( expense of expenses ) {
    let newRow = ( '<tr><td>' + expense.firstName + '<td>' + expense.lastName + '<td>' + expense.id + '<td>' + expense.title + '<td>' + expense.salary + '</td></tr>' );
    outputElement.append( newRow );
    console.log( expense );
    expenses.pop();
  } // end for of loop
} // end function updateExpense

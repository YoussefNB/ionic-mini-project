import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/entities/expense';
import { ExpensesService } from '../services/expenses.service';

@Component({
  selector: 'app-myexpenses',
  templateUrl: './myexpenses.page.html',
  styleUrls: ['./myexpenses.page.scss'],
})
export class MyexpensesPage implements OnInit {

  public expenses: Array < Expense >;

  public expensesDisplayed: Array < Expense >;
  public totalExpenses;
  public currentCategory = 'All';
  public currentPeriod = 'All';

  constructor(private expensesService: ExpensesService) {
    this.expensesService.getExpenses().subscribe( res => {
      this.expenses = res;
      this.expensesDisplayed = this.expenses;
    });
    this.totalExpenses = 0;
  }

  ngOnInit() {
    this.expensesService.getExpenses().subscribe( res => {
      this.expenses = res;
      this.updateTotalExpenses();
    });
  }

 public displayExpenses = () => {

  if (this.currentCategory === 'All') {
    this.expensesDisplayed = this.expenses;
   } else {
     this.expensesDisplayed = this.expenses.filter(expense => expense.category === this.currentCategory);
   }


  if (this.currentPeriod !== 'All') {
    const now = new Date();
    this.expensesDisplayed = this.expensesDisplayed.filter(expense => {
      const periodSelected = this.currentPeriod;
      const expenseDate = new Date(expense.date);
      const difference = ( (now.getUTCMonth() + 1) - (expenseDate.getUTCMonth() + 1) ) + '';
      return(periodSelected === difference);
    });
  }
  this.updateTotalExpenses();
 }

 public updateTotalExpenses = () => {
  this.totalExpenses = 0;
  this.expensesDisplayed.forEach( expense => {
    this.totalExpenses += expense.quantity * expense.price;
  });
}

}

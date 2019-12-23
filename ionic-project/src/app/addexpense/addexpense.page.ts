import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../services/expenses.service';
import { Expense } from 'src/entities/expense';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.page.html',
  styleUrls: ['./addexpense.page.scss'],
})
export class AddexpensePage implements OnInit {

  public newExpense: Expense = {
    id: 0,
    id_user: 1,
    title: '',
    category: '',
    quantity: null,
    brand: '',
    price: null,
    description: '',
    place : '',
    date: ''
  };

  constructor(private expensesService: ExpensesService) {

   }

  ngOnInit() {
  }

  public clearInputs = () => {
    this.newExpense = {
      id: 0,
      id_user: 1,
      title: '',
      category: '',
      quantity: null,
      brand: '',
      price: null,
      description: '',
      place : '',
      date: ''
    };
  }

  public addExpense = () => {
    this.expensesService.addExpense(this.newExpense).then(() => {
      const alertCtrl = document.querySelector('ion-alert-controller');
      alertCtrl.create({
        message: 'Your expense was added successfully ! ✅✅  .',
        header: 'Expense added',
        buttons: ['okay']
      }).then(alertElem => {
        alertElem.present();
      });
      window.scrollTo(0, 0);
      this.clearInputs();
    });
  }

}

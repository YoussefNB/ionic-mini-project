import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Expense } from 'src/entities/expense';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  private expensesCollection: AngularFirestoreCollection<Expense>;
  private expensesObs: Observable<Expense[]>;

  constructor(dataBase: AngularFirestore) {
    this.expensesCollection = dataBase.collection('expenses');
    this.expensesObs =  this.expensesCollection.valueChanges();
  }

  public getExpenses = () => {
    return(this.expensesObs);
  }

  public getExpensesById = (id) => {
    return(this.expensesCollection.doc<Expense>(id).valueChanges());
  }

  public updateExpense(expense: Expense, id:string) {
    return(this.expensesCollection.doc(id).update(expense));
  }

  public addExpense = (expense: Expense) => {
    return(this.expensesCollection.add(expense));
  }

  public removeExpense = (id) => {
    return(this.expensesCollection.doc(id).delete());
  }
}

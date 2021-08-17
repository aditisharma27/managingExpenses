import React,{useState} from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) =>{
            const [filteredYear, setfilteredYear] = useState(2020);
    const filterChangeHandler = selectedYear => {
      setfilteredYear ( selectedYear );
    } 

const filteredExpenses = props.items.filter(expense =>{
  return expense.date.getFullYear().toString() === filteredYear;
});


  return(
          <li>  <Card className="expenses">
              <ExpenseFilter selected = {filteredYear }
                     onChangeFilter={filterChangeHandler}/>
                         <ExpensesChart  expenses ={filteredExpenses}/>
                         {<ExpensesList items={filteredExpenses}/>}
               </Card>
         </li>  
      );
}
export default Expenses;
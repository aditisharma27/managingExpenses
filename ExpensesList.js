import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = props => {

           if (props.items.length === 0){
             return  <h4 className='expenses-list__fallback'>No Expense Found</h4>
          }
 return (
     <ul>
        { props.items.map ((expense) =>(
                        <ExpenseItem 
                               key={expense.id}
                            title={expense.title}  
                               amount = {expense.amount}
                               date={expense.date}                      />
        )) }
     </ul>
 );
 
};

export default ExpensesList ;
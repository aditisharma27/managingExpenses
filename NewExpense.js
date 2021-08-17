import React,{useState} from 'react';
import './NewForm';
import './NewExpense.css';
import NewForm from './NewForm';
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) =>{
     const expenseData ={
                 ...enteredExpenseData,
                 id: Math.random().toString
     };
     
     props.onAddExpense(expenseData);
             setIsEditing(false);
  };
    const startEditingHandler = () =>
    {
         setIsEditing(true);
    };
    const stopEditing =() => {
      setIsEditing(false);
    }
    return(
        <div className="new-expense">
          { !isEditing && <button onClick ={startEditingHandler} > Add New Expense</button>}
         {isEditing && <NewForm 
                        onSaveExpenseData = {saveExpenseDataHandler} 
                        onCancel ={stopEditing}/>
          }     
             </div>
    );
};
export default NewExpense;
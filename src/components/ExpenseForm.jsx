import React, {useState} from 'react'

const ExpenseForm = ({ onAddExpense}) => {
    const [form, setForm] = useState({
        title: '',
        description: '',
        category: '',
        amount: '',
        date: ''
    })
  return (
  <div className='expense-form'>
     <form>
      <input name="title" placeholder="Title" value={form.title} />
      <input name="description" placeholder="Description" value={form.description}  />
      <input name="category" placeholder="Category" value={form.category}  />
      <input name="amount" type="number" placeholder="Amount" value={form.amount} />
      <input name="date" type="date" value={form.date}  />
      <button type="submit">Submit</button>
  
   </form>
  </div>
   )
}

export default ExpenseForm

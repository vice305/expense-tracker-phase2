import React from 'react'

const ExpenseTable = ({expenses}) => {
  return (
    <div className='expense-table'>
      <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody className='table-body'>
      <tr>
        <td>Groceries</td>
        <td>Weekly groceries</td>
        <td>Food</td>
        <td>$150</td>
        <td>2023-10-01</td>
      </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ExpenseTable

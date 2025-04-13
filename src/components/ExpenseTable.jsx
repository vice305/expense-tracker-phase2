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
      </table>
    </div>
  )
}

export default ExpenseTable

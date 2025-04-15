import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/Searchbar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Buy Groceries', amount: 50, category: 'Food', date: '2025-04-10' },
    { id: 2, description: 'Electricity Bill', amount: 80, category: 'Utilities', date: '2025-04-05' },
    { id: 3, description: 'Movie Tickets', amount: 25, category: 'Entertainment', date: '2025-04-08' },
    { id: 4, description: 'Dinner Out', amount: 60, category: 'Food', date: '2025-04-11' },
    { id: 5, description: 'Internet Bill', amount: 45, category: 'Utilities', date: '2025-04-07' },
  ]);
  

  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState(null);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const filteredExpenses = expenses.filter(expense =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedExpenses = () => {
    if (!sortConfig) return filteredExpenses;

    return [...filteredExpenses].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
      return 0;
    });
  };

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <p>
        Start taking control of your finances and life. Record, categorize, and analyze your spending.
      </p>

      <ExpenseForm onAddExpense={handleAddExpense} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ExpenseTable
        expenses={sortedExpenses()}
        onDelete={handleDeleteExpense}
        onSort={handleSort}
        sortConfig={sortConfig}
      />
    
    </div>
  );
}

export default App;
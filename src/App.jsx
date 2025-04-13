import { useState } from 'react'
import Header from './components/Header'
import ExpenseForm from './components/ExpenseForm'
import Footer from './components/Footer'
import ExpenseTable from './components/ExpenseTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <ExpenseForm />
      <ExpenseTable />
     <Footer />
    </>
  )
}

export default App

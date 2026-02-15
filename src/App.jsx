import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpensesTable from "../components/ExpensesTable";
import "./App.css";
import expensesData from "./expensesData";

function App() {
  const [expenses, setExpenses] = useState(expensesData);

  return (
    <main>
      <h1>Track Your Expenses</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpenses={setExpenses} />
        <ExpensesTable expenses={expenses} />
      </div>
    </main>
  );
}

export default App;

import { useRef, useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpensesTable from "../components/ExpensesTable";
import "./App.css";
import expensesData from "./expensesData";
import { useLocalStorage } from "../hooks/useLocalStorage";

function App() {
  const [expenses, setExpenses] = useLocalStorage("key", expensesData);
  const [expense, setExpense] = useLocalStorage("expense", {
    title: "",
    category: "",
    amount: "",
  });
  const [isEditing, setIsEditing] = useLocalStorage("isEditing", "");

  return (
    <main>
      <h1>Track Your Expense.</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
        <ExpensesTable
          expenses={expenses}
          setExpenses={setExpenses}
          setExpense={setExpense}
          setIsEditing={setIsEditing}
        />
      </div>
    </main>
  );
}

export default App;

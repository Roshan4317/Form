import { useRef, useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpensesTable from "../components/ExpensesTable";
import "./App.css";
import expensesData from "./expensesData";

function App() {
  const [expenses, setExpenses] = useState(expensesData);
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [isEditing, setIsEditing] = useState("");

  return (
    <main>
      <h1>Track Your Expenses.</h1>
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

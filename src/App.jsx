import ExpenseForm from "../components/ExpenseForm";
import ExpensesTable from "../components/ExpensesTable";
import "./App.css";

function App() {
  return (
    <main>
      <h1>Track Your Expenses</h1>
      <div className="expense-tracker">
        <ExpenseForm />
        <ExpensesTable />
      </div>
    </main>
  );
}

export default App;

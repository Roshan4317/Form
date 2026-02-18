import { useRef, useState } from "react";

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const amountRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const expense = { ...getFormData(e), id: crypto.randomUUID() };
    // setExpenses((prevState) => [...prevState, expense]);
    // setExpenses((prevState) => [
    //   ...prevState,
    //   { ...expense, id: crypto.randomUUID() },
    // ]);
    // setExpense({
    //   title: "",
    //   category: "",
    //   amount: "",
    // });

    setExpenses((prevState) => [
      ...prevState,
      {
        id: crypto.randomUUID(),
        title: titleRef.current.value,
        category: categoryRef.current.value,
        amount: amountRef.current.value,
      },
    ]);
    titleRef.current.value = "";
    categoryRef.current.value = "";
    amountRef.current.value = "";
  };

  // function getFormData(e) {
  //   const formData = new FormData(e.target);
  //   const data = {};
  //   for (let [key, value] of formData.entries()) {
  //     data[key] = value;
  //   }

  //   return data;
  // }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          ref={titleRef}
          // value={expense.title}
          // onChange={(e) =>
          //   setExpense((prevState) => ({ ...prevState, title: e.target.value }))
          // }
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          name="category"
          ref={categoryRef}
          // value={expense.category}
          // onChange={(e) =>
          //   setExpense((prevState) => ({
          //     ...prevState,
          //     category: e.target.value,
          //   }))
          // }
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          ref={amountRef}
          // value={expense.amount}
          // onChange={(e) =>
          //   setExpense((prevState) => ({
          //     ...prevState,
          //     amount: e.target.value,
          //   }))
          // }
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}

import { useRef, useState } from "react";

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});

  // const titleRef = useRef(null);
  // const categoryRef = useRef(null);
  // const amountRef = useRef(null);

  const validate = (formData) => {
    const errorData = {};

    if (!formData.title) {
      errorData.title = "Title is Required";
    }
    if (!formData.category) {
      errorData.category = "Please Select a Category";
    }
    if (!formData.amount) {
      errorData.amount = "Please enter an amount";
    }

    setErrors(errorData);
    return errorData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(expense);

    if (Object.keys(validateResult).length) return;
    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);

    setExpense({
      title: "",
      category: "",
      amount: "",
    });

    // setExpenses((prevState) => [
    //   ...prevState,
    //   {
    //     id: crypto.randomUUID(),
    //     title: titleRef.current.value,
    //     category: categoryRef.current.value,
    //     amount: amountRef.current.value,
    //   },
    // ]);
    // titleRef.current.value = "";
    // categoryRef.current.value = "";
    // amountRef.current.value = "";
  };

  // function getFormData(e) {
  //   const formData = new FormData(e.target);
  //   const data = {};
  //   for (let [key, value] of formData.entries()) {
  //     data[key] = value;
  //   }

  //   return data;
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({});
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          // ref={titleRef}
          value={expense.title}
          // onChange={(e) =>
          //   setExpense((prevState) => ({ ...prevState, title: e.target.value }))
          // }
          onChange={handleChange}
        />
        <p className="error">{errors.title}</p>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          name="category"
          // ref={categoryRef}
          value={expense.category}
          // onChange={(e) =>
          //   setExpense((prevState) => ({
          //     ...prevState,
          //     category: e.target.value,
          //   }))
          // }
          onChange={handleChange}
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
        <p className="error">{errors.category}</p>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          // ref={amountRef}
          value={expense.amount}
          // onChange={(e) =>
          //   setExpense((prevState) => ({
          //     ...prevState,
          //     amount: e.target.value,
          //   }))
          // }
          onChange={handleChange}
        />
        <p className="error">{errors.amount}</p>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}

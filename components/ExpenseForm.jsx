import { useRef, useState } from "react";
import Input from "./Input";
import Category from "./Category";

export default function ExpenseForm({
  setExpenses,
  setExpense,
  expense,
  isEditing,
  setIsEditing,
}) {
  const [errors, setErrors] = useState({});

  // const titleRef = useRef(null);
  // const categoryRef = useRef(null);
  // const amountRef = useRef(null);

  const validationConfig = {
    title: [
      { required: true, message: "Title is Required" },
      { minLength: 2, message: "Title Should be 2 characters Long" },
    ],
    category: [{ required: true, message: "Please Select a Category" }],
    amount: [
      { required: true, message: "Please Enter an Amount" },
      { pattern: /^[1-9]\d*(\.\d+)?$/, message: "Please Enter a valid number" },
    ],
  };

  const validate = (formData) => {
    const errorData = {};
    Object.entries(formData).forEach(([key, value]) =>
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorData[key] = rule.message;
          return true;
        }
        if (rule.minLength && value.length < rule.minLength) {
          errorData[key] = rule.message;
          return true;
        }
        if (rule.pattern && !rule.pattern.test(value)) {
          errorData[key] = rule.message;
          return true;
        }
      }),
    );

    // if (!formData.title) {
    //   errorData.title = "Title is Required";
    // }
    // if (!formData.category) {
    //   errorData.category = "Please Select a Category";
    // }
    // if (!formData.amount) {
    //   errorData.amount = "Please enter an amount";
    // }

    setErrors(errorData);
    return errorData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(expense);

    if (Object.keys(validateResult).length) return;

    if (isEditing) {
      setExpenses((prevState) =>
        prevState.map((prevExpense) => {
          if (prevExpense.id === isEditing) {
            return { ...expense, id: isEditing };
          }
          return prevExpense;
        }),
      );

      setExpense({
        title: "",
        category: "",
        amount: "",
      });
      setIsEditing("");
      return;
    }

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
      {/* <div className="input-container">
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
      </div> */}

      <Input
        id="title"
        name="title"
        label="Title"
        value={expense.title}
        handleChange={handleChange}
        error={errors.title}
      />
      <Category
        name="category"
        label="Category"
        value={expense.category}
        handleChange={handleChange}
        errors={errors.category}
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        defaultOption="  Select Category"
      />
      <Input
        id="amount"
        name="amount"
        label="Amount"
        value={expense.amount}
        handleChange={handleChange}
        error={errors.amount}
      />

      <button className="add-btn">{isEditing ? "Save" : "Add"}</button>
    </form>
  );
}

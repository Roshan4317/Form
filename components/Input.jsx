import React from "react";

export default function Input({ id, name, label ,value, handleChange, error }) {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input
        id={id}
        name={name}
        // ref={titleRef}
        value={value}
        // onChange={(e) =>
        //   setExpense((prevState) => ({ ...prevState, title: e.target.value }))
        // }
        onChange={handleChange}
      />
      <p className="error">{error}</p>
    </div>
  );
}

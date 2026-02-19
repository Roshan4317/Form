import React from "react";

export default function Category({
  name,
  value,
  label,
  handleChange,
  errors,
  options,
  defaultOption,
}) {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        // ref={categoryRef}
        value={value}
        // onChange={(e) =>
        //   setExpense((prevState) => ({
        //     ...prevState,
        //     category: e.target.value,
        //   }))
        // }
        onChange={handleChange}
      >
        {defaultOption && (
          <option value="" hidden>
            {defaultOption}
          </option>
        )}
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="error">{errors}</p>
    </div>
  );
}

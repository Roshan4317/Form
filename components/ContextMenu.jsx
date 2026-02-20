import React from "react";

export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  setExpenses,
  rowId,
  setExpense,
  expenses,
  setIsEditing,
}) {
  if (!menuPosition.left) {
    return;
  }

  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          const { title, category, amount } = expenses.find(
            (el) => el.id === rowId,
          );

          setExpense({ title, category, amount });
          setIsEditing(rowId);
          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId),
          );
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}

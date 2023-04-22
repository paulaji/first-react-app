import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2023, 2, 28);
  const expenseTitle = "Suryanarayanan";
  const expenseAmount = 599;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">Rs {expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

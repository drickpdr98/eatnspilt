import Button from "./Button";

export default function SplitBill() {
  return (
    <form className="form-split-bill ">
      <h2>Split Bill with X</h2>

      <label> Bill Value</label>
      <input type="text" />

      <label> Your Expense </label>
      <input type="text" />

      <label> X Expense</label>
      <input type="text" />

      <Button>Split Bill</Button>
    </form>
  );
}

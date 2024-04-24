import clsx from "clsx";
import styles from "./TransactionHistory.module.css";

export default function TransactionHistory ({
    items: { id, type, amount,currency },}) {
    return(
        <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
  {transactions.map((trans) => (
        <tr key={id}>
        <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
        </tr>
      ))}
  </tbody>
</table>
    )
}
import clsx from "clsx";
import styles from "./TransactionHistory.module.css";


export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((trans) => (
          <tr key={trans.id}>
            <td>{trans.type}</td>
            <td>{trans.amount}</td>
            <td>{trans.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default function TransactionList({ transactions }) {
  return (
    <ul className="divide-y">
      {transactions.map(tx => (
        <li key={tx.id} className="flex justify-between py-2 text-sm">
          <span>{tx.type}</span>
          <span className={tx.amount < 0 ? "text-red-600" : "text-green-600"}>{tx.amount} {tx.currency}</span>
          <span className="text-gray-500">{tx.date}</span>
        </li>
      ))}
    </ul>
  );
}

import { useEffect, useState } from 'react';
import { fetchAccounts, fetchTransactions } from '../utils/api';
import AccountCard from '../components/AccountCard';
import TransactionList from '../components/TransactionList';

export default function Dashboard() {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([fetchAccounts(), fetchTransactions()])
      .then(([accs, txs]) => {
        setAccounts(accs);
        setTransactions(txs);
      })
      .catch(() => setError('Failed to load dashboard data'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading dashboard...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-semibold mb-2">Accounts</h3>
          {accounts.map(acc => (
            <AccountCard key={acc.id} {...acc} />
          ))}
        </div>
        <div>
          <h3 className="font-semibold mb-2">Recent Transactions</h3>
          <TransactionList transactions={transactions.slice(0, 5)} />
        </div>
      </div>
    </div>
  );
}

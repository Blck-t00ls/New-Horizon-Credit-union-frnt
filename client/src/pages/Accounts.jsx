import { useEffect, useState } from 'react';
import { fetchAccounts } from '../utils/api';
import AccountCard from '../components/AccountCard';

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAccounts()
      .then(setAccounts)
      .catch(() => setError('Failed to load accounts'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading accounts...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Accounts</h2>
      {accounts.map(acc => (
        <AccountCard key={acc.id} {...acc} />
      ))}
    </div>
  );
}

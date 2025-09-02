import { useState } from 'react';

export default function Crypto() {
  const [amount, setAmount] = useState('');
  const [to, setTo] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = e => {
    e.preventDefault();
    setMessage('Crypto transfer sent (stub)');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Crypto</h2>
      <p>Manage your Bitcoin/Lightning accounts and transfers here.</p>
      <form className="space-y-4 max-w-md" onSubmit={handleSend}>
        <input type="text" placeholder="Recipient Wallet" value={to} onChange={e => setTo(e.target.value)} className="w-full px-3 py-2 border rounded" />
        <input type="number" placeholder="Amount (BTC)" value={amount} onChange={e => setAmount(e.target.value)} className="w-full px-3 py-2 border rounded" />
        <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">Send Crypto</button>
      </form>
      {message && <div className="mt-4 text-green-600">{message}</div>}
    </div>
  );
}

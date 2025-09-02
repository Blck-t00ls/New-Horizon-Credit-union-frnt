import { useState } from 'react';

export default function Payments() {
  const [amount, setAmount] = useState('');
  const [to, setTo] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = e => {
    e.preventDefault();
    setMessage('Payment sent (stub)');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Payments</h2>
      <form className="space-y-4 max-w-md" onSubmit={handleSend}>
        <input type="text" placeholder="Recipient" value={to} onChange={e => setTo(e.target.value)} className="w-full px-3 py-2 border rounded" />
        <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} className="w-full px-3 py-2 border rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Send Payment</button>
      </form>
      {message && <div className="mt-4 text-green-600">{message}</div>}
    </div>
  );
}

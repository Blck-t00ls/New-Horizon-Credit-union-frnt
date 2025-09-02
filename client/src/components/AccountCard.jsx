export default function AccountCard({ name, balance, currency }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-4">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-2xl font-bold text-green-600">{balance} {currency}</p>
    </div>
  );
}

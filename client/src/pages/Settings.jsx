import { useState } from 'react';
import { fetchKYC } from '../utils/api';

export default function Settings() {
  const [kycStatus, setKycStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleKYC = async () => {
    setLoading(true);
    const result = await fetchKYC({ name: 'Test User', id: '12345' });
    setKycStatus(result.status);
    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Settings</h2>
      <p>Manage your profile and app settings here.</p>
      <button onClick={handleKYC} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" disabled={loading}>
        {loading ? 'Checking KYC...' : 'Run KYC/AML Check'}
      </button>
      {kycStatus && <div className="mt-4 text-green-600">KYC Status: {kycStatus}</div>}
    </div>
  );
}

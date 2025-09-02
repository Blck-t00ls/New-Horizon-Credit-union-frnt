import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import AuthModal from './components/AuthModal';
import Toast from './components/Toast';
import UserProfileDropdown from './components/UserProfileDropdown';
import Dashboard from './pages/Dashboard';
import Accounts from './pages/Accounts';
import Transactions from './pages/Transactions';
import Payments from './pages/Payments';
import Settings from './pages/Settings';
import Crypto from './pages/Crypto';

function AppContent() {
  const [authOpen, setAuthOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const location = useLocation();
  const navLinks = [
    { to: '/', label: 'Dashboard' },
    { to: '/accounts', label: 'Accounts' },
    { to: '/transactions', label: 'Transactions' },
    { to: '/payments', label: 'Payments' },
    { to: '/crypto', label: 'Crypto' },
    { to: '/settings', label: 'Settings' },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col font-sans">
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      <header className="bg-white shadow-lg py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-3">
            <img src="/logo192.png" alt="Bank Logo" className="h-10 w-10 rounded-full border border-blue-300" />
            <span className="text-2xl font-bold text-blue-900 tracking-wide">New Horizon Credit Union</span>
          </div>
          <nav>
            <ul className="flex gap-4 items-center">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className={`px-3 py-2 rounded transition-colors duration-200 font-medium ${location.pathname === link.to ? 'bg-blue-100 text-blue-900' : 'text-blue-700 hover:bg-blue-50'}`}>{link.label}</Link>
                </li>
              ))}
              <li><button className="bg-blue-600 text-white px-3 py-1 rounded shadow hover:bg-blue-700" onClick={() => setAuthOpen(true)}>Login/Register</button></li>
              <li><UserProfileDropdown /></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        <aside className="hidden md:block w-64 bg-white border-r p-6 shadow-lg">
          <nav>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className={`block py-2 px-4 rounded font-medium transition-colors duration-200 ${location.pathname === link.to ? 'bg-blue-100 text-blue-900' : 'text-blue-700 hover:bg-blue-50'}`}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
      <footer className="bg-blue-900 text-white text-center py-6 text-sm mt-8 shadow-inner">
        <div className="container mx-auto px-4">
          <div className="mb-2">&copy; 2025 New Horizon Credit Union. All rights reserved.</div>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import AuthModal from './components/AuthModal';
import Toast from './components/Toast';
import UserProfileDropdown from './components/UserProfileDropdown';
import Dashboard from './pages/Dashboard';
import Accounts from './pages/Accounts';
import Transactions from './pages/Transactions';
import Payments from './pages/Payments';
import Settings from './pages/Settings';
import Crypto from './pages/Crypto';

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const location = useLocation();
  const navLinks = [
    { to: '/', label: 'Dashboard' },
    { to: '/accounts', label: 'Accounts' },
    { to: '/transactions', label: 'Transactions' },
    { to: '/payments', label: 'Payments' },
    { to: '/crypto', label: 'Crypto' },
    { to: '/settings', label: 'Settings' },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col font-sans">
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      <header className="bg-white shadow-lg py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-3">
            <img src="/logo192.png" alt="Bank Logo" className="h-10 w-10 rounded-full border border-blue-300" />
            <span className="text-2xl font-bold text-blue-900 tracking-wide">New Horizon Credit Union</span>
          </div>
          <nav>
            <ul className="flex gap-4 items-center">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className={`px-3 py-2 rounded transition-colors duration-200 font-medium ${location.pathname === link.to ? 'bg-blue-100 text-blue-900' : 'text-blue-700 hover:bg-blue-50'}`}>{link.label}</Link>
                </li>
              ))}
              <li><button className="bg-blue-600 text-white px-3 py-1 rounded shadow hover:bg-blue-700" onClick={() => setAuthOpen(true)}>Login/Register</button></li>
              <li><UserProfileDropdown /></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        <aside className="hidden md:block w-64 bg-white border-r p-6 shadow-lg">
          <nav>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className={`block py-2 px-4 rounded font-medium transition-colors duration-200 ${location.pathname === link.to ? 'bg-blue-100 text-blue-900' : 'text-blue-700 hover:bg-blue-50'}`}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1 container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
      <footer className="bg-blue-900 text-white text-center py-6 text-sm mt-8 shadow-inner">
        <div className="container mx-auto px-4">
          <div className="mb-2">&copy; 2025 New Horizon Credit Union. All rights reserved.</div>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-blue-900 text-white py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">New Horizon Credit Union</h1>
          <nav>
            <ul className="flex gap-6">
              <li><a href="#" className="hover:underline">Dashboard</a></li>
              <li><a href="#" className="hover:underline">Accounts</a></li>
              <li><a href="#" className="hover:underline">Payments</a></li>
              <li><a href="#" className="hover:underline">Settings</a></li>
            </ul>
          import { useState } from 'react';
          import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
          import AuthModal from './components/AuthModal';
          import Dashboard from './pages/Dashboard';
          import Accounts from './pages/Accounts';
          import Transactions from './pages/Transactions';
          import Payments from './pages/Payments';
          import Settings from './pages/Settings';
          import Crypto from './pages/Crypto';
              const [authOpen, setAuthOpen] = useState(false);
              <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
            const [authOpen, setAuthOpen] = useState(false);
            return (
              <Router>
                <div className="min-h-screen bg-gray-50 flex flex-col">
                  <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
                  <header className="bg-blue-900 text-white py-6 shadow-md">
                    <div className="container mx-auto flex justify-between items-center px-4">
                      <h1 className="text-2xl font-bold">New Horizon Credit Union</h1>
                      <nav>
                        <ul className="flex gap-6">
                          <li><Link to="/" className="hover:underline">Dashboard</Link></li>
                          <li><Link to="/accounts" className="hover:underline">Accounts</Link></li>
                          <li><Link to="/payments" className="hover:underline">Payments</Link></li>
                          <li><Link to="/settings" className="hover:underline">Settings</Link></li>
                          <li><button className="bg-white text-blue-900 px-3 py-1 rounded shadow hover:bg-gray-100" onClick={() => setAuthOpen(true)}>Login/Register</button></li>
                        </ul>
                      </nav>
                    </div>
                  </header>
                  <div className="flex flex-1">
                    {/* Sidebar Navigation */}
                    <aside className="hidden md:block w-64 bg-white border-r p-6">
                      <nav>
                        <ul className="space-y-4">
                          <li><Link to="/" className="block py-2 px-4 rounded hover:bg-blue-100">Dashboard</Link></li>
                          <li><Link to="/accounts" className="block py-2 px-4 rounded hover:bg-blue-100">Accounts</Link></li>
                          <li><Link to="/transactions" className="block py-2 px-4 rounded hover:bg-blue-100">Transactions</Link></li>
                          <li><Link to="/payments" className="block py-2 px-4 rounded hover:bg-blue-100">Payments</Link></li>
                          <li><Link to="/crypto" className="block py-2 px-4 rounded hover:bg-blue-100">Crypto</Link></li>
                          <li><Link to="/settings" className="block py-2 px-4 rounded hover:bg-blue-100">Settings</Link></li>
                        </ul>
                      </nav>
                    </aside>
                    <main className="flex-1 container mx-auto px-4 py-8">
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/accounts" element={<Accounts />} />
                        <Route path="/transactions" element={<Transactions />} />
                        <Route path="/payments" element={<Payments />} />
                        <Route path="/crypto" element={<Crypto />} />
                        <Route path="/settings" element={<Settings />} />
                      </Routes>
                    </main>
                  </div>
                  <footer className="bg-gray-200 text-center py-4 text-sm text-gray-600">
                    &copy; 2025 New Horizon Credit Union. All rights reserved.
                  </footer>
                </div>
              </Router>
            );
          }

          export default App;
                      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Deposit</button>
                      <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Crypto Transfer</button>
                    </div>
                  </div>
                </main>
              </div>
              <li className="flex justify-between py-1 border-b"><span>ACH Payment</span><span className="text-red-600">-$250.00</span></li>
              <li className="flex justify-between py-1"><span>Crypto Transfer</span><span className="text-green-600">+$0.005 BTC</span></li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-2">Linked Accounts</h2>

            <ul className="text-sm">
              <li className="flex justify-between py-1 border-b"><span>Bank of America</span><span className="text-blue-600">Synced</span></li>
              <li className="flex justify-between py-1 border-b"><span>Chase</span><span className="text-blue-600">Synced</span></li>
              <li className="flex justify-between py-1"><span>Bitcoin Wallet</span><span className="text-yellow-500">Active</span></li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Money</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Deposit</button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Crypto Transfer</button>
          </div>
        </div>
      </main>
      <footer className="bg-gray-200 text-center py-4 text-sm text-gray-600">
        &copy; 2025 New Horizon Credit Union. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

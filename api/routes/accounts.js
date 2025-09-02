const express = require('express');
const router = express.Router();

// GET /api/accounts
router.get('/', async (req, res) => {
  // TODO: Fetch accounts from DB or Fineract API
  res.json([
    { id: 1, name: 'Checking', balance: 12500.00, currency: 'USD' },
    { id: 2, name: 'Bitcoin Wallet', balance: 0.005, currency: 'BTC' }
  ]);
});

// POST /api/accounts
router.post('/', async (req, res) => {
  // TODO: Create new account via Fineract API
  res.json({ message: 'Account created (stub)' });
});

module.exports = router;

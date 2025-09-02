const express = require('express');
const router = express.Router();

// GET /api/transactions
router.get('/', async (req, res) => {
  // TODO: Fetch transactions from DB or external APIs
  res.json([
    { id: 1, type: 'deposit', amount: 1000, currency: 'USD', date: '2025-09-01' },
    { id: 2, type: 'ach', amount: -250, currency: 'USD', date: '2025-08-30' },
    { id: 3, type: 'crypto', amount: 0.005, currency: 'BTC', date: '2025-08-29' }
  ]);
});

// POST /api/transactions
router.post('/', async (req, res) => {
  // TODO: Create/send transaction (ACH, crypto, etc.)
  res.json({ message: 'Transaction created (stub)' });
});

module.exports = router;

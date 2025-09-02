const express = require('express');
const router = express.Router();

// POST /api/auth/register
router.post('/register', async (req, res) => {
  // TODO: Implement registration logic (hash password, store user)
  res.json({ message: 'User registered (stub)' });
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  // TODO: Implement login logic (verify password, issue JWT)
  res.json({ message: 'User logged in (stub)', token: 'sandbox-jwt-token' });
});

module.exports = router;

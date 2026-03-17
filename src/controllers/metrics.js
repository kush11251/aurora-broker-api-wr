const express = require('express');
const router = express.Router();

router.get('/summary', (req, res) => {
  res.json({ message: 'Metrics summary' });
});

module.exports = router;
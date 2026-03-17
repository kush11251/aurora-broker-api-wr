const express = require('express');
const router = express.Router();

router.post('/place-order', (req, res) => {
  res.json({ message: 'Order placed successfully' });
});

module.exports = router;
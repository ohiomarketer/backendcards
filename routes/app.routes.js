const { Router } = require('express');

const router = Router();

router.use('/cards', require('./cards/cards.routes'));

module.exports = router;
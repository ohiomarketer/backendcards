const { Router } = require('express');

const router = Router();

router.use('/', require('./cards/cards.routes'));

module.exports = router;
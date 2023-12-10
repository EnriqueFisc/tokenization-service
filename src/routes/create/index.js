const router = require('express').Router();
const generateToken = require('../../controllers/create/generateJWToken');

router.post('/create', generateToken);


module.exports = router
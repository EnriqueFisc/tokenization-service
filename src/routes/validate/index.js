const router = require('express').Router();
const validateToken = require('../../controllers/validate');


router.post('/validate', validateToken);


module.exports = router
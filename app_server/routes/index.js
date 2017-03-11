var express = require('express');
var router = express.Router();
var ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlOthers.angularApp)

/* Other pages */
router.get('/about', ctrlOthers.about)

module.exports = router;
// ROUTE SAUCES

const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const sauceCtrl = require('../controllers/sauce');

router.put('/:id', auth, multer, sauceCtrl.update);
router.delete('/:id', auth, sauceCtrl.delete);

router.post('/', auth, multer, sauceCtrl.create);
router.get('/', auth, sauceCtrl.list);
router.get('/:id', auth, sauceCtrl.OneSauce);
router.post('/:id/like', auth, sauceCtrl.likeSauce);

module.exports = router;
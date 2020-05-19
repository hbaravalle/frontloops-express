const express = require('express');
const router = express.Router();

router.get('/1/1', (req, res) => res.render('loop1/step1', {loop: 1, step: 1}))
router.get('/1/2', (req, res) => res.render('loop1/step2', {loop: 1, step: 2}))
router.get('/1/3', (req, res) => res.render('loop1/step3', {loop: 1, step: 3}))

module.exports = router;
const express = require('express');


const router = express.Router();

router.get('/', (req, res) => {
    res.render('map', {
        title: 'Twitter Stream',
        error: req.query.error,
        logout: !!req.query.logout
    });
});

router.put('/', (req, res) => {
  //------------------------------
  // Start coding here!
  // Initialize stream from Twitter
  // -----------------------------
});

module.exports = router;

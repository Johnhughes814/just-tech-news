const router = require('express').Router();

const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;

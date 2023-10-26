/* eslint-disable no-unused-vars */
const router = require('express').Router()

const apiTheme = require('./api/apiTheme.route')


router.use('/api/themes', apiTheme)


module.exports = router

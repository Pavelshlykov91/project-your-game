/* eslint-disable no-unused-vars */
const router = require('express').Router()



const apiTheme = require('./api/apiTheme.route')
const apiAuth = require('./api/apiAuth.route')

router.use('/api/themes', apiTheme)
router.use('/api/auth', apiAuth)

module.exports = router

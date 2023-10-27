/* eslint-disable no-unused-vars */
const router = require('express').Router()



const apiTheme = require('./api/apiTheme.route')
const apiAuth = require('./api/apiAuth.route')
const apiUsers= require('./api/apiUsers.route')

router.use('/api/themes', apiTheme)
router.use('/api/auth', apiAuth)
router.use('/api/users', apiUsers)


module.exports = router

const bcrypt = require('bcrypt')
const { User } = require('../../db/models')

const router = require('express').Router()

router.post('/reg', async (req, res) => {
  try {
    const { login, password } = req.body
    if (login && password) {
      const user = await User.findOne({ where: { login } })
      if (!user) {
        const hash = await bcrypt.hash(password, 10)
        const userData = await User.create({ login, password: hash })

        req.session.userId = userData.id
        res.status(200).json({  user: userData })
      } else {
        res.status(400).json({ message: 'Такой пользователь уже существует' })
      }
    } else {
      res.status(400).json({ message: 'Заполните все поля' })
    }
  } catch ({ error }) {
    res.status(400).json({ error })
  }
})

module.exports = router
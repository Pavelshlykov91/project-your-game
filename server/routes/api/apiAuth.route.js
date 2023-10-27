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

        res.status(200).json({ user: userData })
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

router.get('/user-check', async (req, res) => {
  if (req.session.userId) {
    const check = await User.findOne({ where: { id: req.session.userId } })
    res.status(200).json(check)
  } 
})

router.get('/logout', async (req, res) => {
  try {
    req.session.destroy((error) => {
      if (error) {
        return res.status(500).json({ message: 'Ошибка при удалении сессии' })
      }

      res.clearCookie('user_sid').json({ message: 'Успешный выход' })
    })
  } catch ({ error }) {
    res.status(400).json({ error })
  }
})

module.exports = router

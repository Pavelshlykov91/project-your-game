const router = require('express').Router()

const { log } = require('console')
const { Theme, Question } = require('../../db/models')

router.get('/', async (req, res) => {
  console.log('------------------------------');
  try {
    const themes = await Theme.findAll({ include: { model: Question } })
    res.status(200).json( themes )
  } catch ({ message }) {
    res.status(500).json({ message })
  }
})

module.exports = router

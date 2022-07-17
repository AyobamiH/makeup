const express = require('express')
const router = express.Router()


const mainController = require('../controllers/main')

router.get('/', mainController.getIndex)

router.get('/:product', mainController.getProductByType)

// router.get('/:brand', mainController.getProductByBrand)



module.exports = router
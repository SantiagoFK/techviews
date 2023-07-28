const express = require('express')
const Article = require('../models/articleModel')
const {
    createArticle,
    getArticles,
    getSingleArticle,
    deleteArticle,
    updateArticle
} = require('../controllers/articleControllers')

const router = express.Router()

// GET all articles
router.get('/', getArticles)

// GET a single article
router.get('/:id', getSingleArticle)

// POST a new article
router.post('/', createArticle)

// DELETE an article
router.delete('/:id', deleteArticle)

// UPDATE an article
router.patch('/:id', updateArticle)

module.exports = router
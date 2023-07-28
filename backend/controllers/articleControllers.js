const Article = require('../models/articleModel')
const mongoose = require('mongoose')

/* GET ALL ARTICLES */

const getArticles = async (req, res) => {
    // fetch all articles from the db
    const articles = await Article.find({}).sort({created: -1})

    res.status(200).json(articles)
}

/* GET A SINGLE ARTICLE */

const getSingleArticle = async (req, res) => {
    // extract the id route parameter
    const {id} = req.params

    // check if id is valid (32 or 64 bytes string)
    if( mongoose.Types.ObjectId.isValid(id) )
    {
        // get by id
        const article = await Article.findById(id)

        if( ! article ) //article not found
        {
            return res.status(404).json({error: 'No such article'})
        }

        res.status(200).json(article)
    }else
    {
        return res.status(404).json({error: 'No such article. Given ID is not a valid format.'})
    }
    
}

/* CREATE A NEW ARTICLE*/

const createArticle = async (req, res) => {
    const {title, author, body} = req.body
    try
    {
        const article = await Article.create({title, author, body})
        res.status(200).json(article)

    }catch(error)
    {
        res.status(400).json({error: error.message})
    }
}

/* DELETE AN ARTICLE */
const deleteArticle = async (req, res) => {
    const {id} = req.params

    if( mongoose.Types.ObjectId.isValid(id) )
    {
        //in mongo db ids go with a preceding underscore
        const article = await Article.findByIdAndDelete({_id: id})  

        if( ! article ) //article not found
        {
            return res.status(404).json({error: 'No such article'})
        }
            
        res.status(200).json(article)  
    }else
    {
        return res.status(404).json({error: 'No such article. Given ID is not a valid format.'})
    }


    
}

const updateArticle = async(req, res) => {
    const {id} = req.params

    if( mongoose.Types.ObjectId.isValid(id) )
    {
        //in mongo db ids go with a preceding underscore
        //here the spread operator is used too
        const article = await Article.findByIdAndUpdate({_id:id}, {...req.body})

        if( ! article ) //article not found
        {
            return res.status(404).json({error: 'No such article'})
        }
            
        res.status(200).json(article)
    }else
    {
        return res.status(404).json({error: 'No such article. Given ID is not a valid format.'})
    }

}

module.exports = {
    createArticle,
    getArticles,
    getSingleArticle,
    deleteArticle,
    updateArticle
}
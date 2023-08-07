import { useState, useEffect } from 'react';

import ArticleDetail from './ArticleDetail';

function Home()
{
    /* FETCH ARTICLES FROM API */
    const [articles, setArticles] = useState(null)

    useEffect(function(){
       const fetchArticles = async () => {
            const response = await fetch('http://localhost:8000/api/articles/')
            const json = await response.json()

            if(response.ok){
                setArticles(json)
            }
       } 
       
       fetchArticles()
    }, [])
    

    return(
        <div className="home">
            <div className="articles">
                { articles && articles.map( (article) => (
                    <ArticleDetail 
                    key={article._id} 
                    article={article}></ArticleDetail>
                ))}
                
                <p className="addArticleButton">+</p>

            </div>

            <div className="aside">
                <p>Articles: {articles && articles.length}</p>
                <p>Users: XX</p>
            </div>
        </div>
    );
}

export default Home;
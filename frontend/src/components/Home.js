import { useState, useEffect , Fragment} from 'react';

import { ArticleDetail } from './ArticleDetail'

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
            <h1>Home</h1>
            <div className="articles">
                { articles && articles.map( (article) => 
                    (
                        <Fragment>
                        <p key={article._id}>{article.title}</p>
                        <p>{article.author}</p>
                        <p>{article.body}</p>
                        </Fragment>
                    )
                )}
            </div>
        </div>
    );
}

export default Home;
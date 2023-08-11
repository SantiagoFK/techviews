import { useEffect } from 'react';
import { useArticlesContext } from '../hooks/useArticlesContext';

import ArticleDetail from './ArticleDetail';
import ArticleForm from './ArticleForm';

function Home()
{
    const {articles, dispatch} = useArticlesContext()

    /* FETCH ARTICLES FROM API */

    useEffect(function(){
       const fetchArticles = async () => {
            const response = await fetch('http://localhost:8000/api/articles/')
            const json = await response.json()

            if(response.ok){
                dispatch({
                    type: 'SET_ARTICLES',
                    payload: json
                })
            }
       } 
       
       fetchArticles()
    }, [dispatch])
    

    return(
        <div className="home">
            <div className="articles">
                { articles && articles.map( (article) => (
                    <ArticleDetail 
                    key={article._id} 
                    article={article}>
                    </ArticleDetail>
                ))}
            </div>

            <div className="aside">
                <p>Articles: {articles && articles.length}</p>
                <p>Users: XX</p>
                <ArticleForm></ArticleForm>
            </div>
        </div>
    );
}

export default Home;
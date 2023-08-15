import { Fragment, useEffect, useState } from 'react';
import { useArticlesContext } from '../hooks/useArticlesContext';

import ArticleDetail from './ArticleDetail';
import ArticleForm from './ArticleForm';
import DialogArticleForm from './DialogArticleForm';

function Home()
{
    /* FETCH ARTICLES FROM API */
    const {articles, dispatch} = useArticlesContext()

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
    
    /* HANDLES NEW ARTICLE DIALOG IN MOBILE*/
    const [mobileForm, setMobileForm] = useState(false)

    const handleMobileForm = () => {
        setMobileForm(!mobileForm)
    }

    return(
        <div className="home">
            <div className="articles">
                { articles && articles.map( (article) => (
                    <ArticleDetail 
                    key={article._id} 
                    article={article}>
                    </ArticleDetail>
                ))}

                
                { mobileForm === true ? (
                    <>
                        <DialogArticleForm parentCallback = { handleMobileForm }/>
                        <div className="mobile-close-article-btn">
                            <p onClick={ handleMobileForm }>
                                <ion-icon name="close-circle"></ion-icon>
                            </p>    
                        </div>
                    </>
                ): (
                    <div className="mobile-add-article-btn">
                        <p onClick={ handleMobileForm }>
                            <ion-icon name="add-circle"></ion-icon>
                        </p>    
                    </div>
                )}
                
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
import { useArticlesContext } from "../hooks/useArticlesContext"
import { formatDistanceToNow } from 'date-fns'

function ArticleDetail({article})
{
    const { dispatch } = useArticlesContext()

    const handleDelete = async () => {
        const response = await fetch(`http://localhost:8000/api/articles/${article._id}`, {
            method: 'DELETE'
        })

        const json = await response.json()
        
        if( response.ok )
        {
            //update context
            dispatch({type: 'DELETE_ARTICLE', payload: json})
        }
        
    }

    return(
        <div className="articleDetail">
            <h3 className="articleTitle"> {article.title} </h3>
            <p className="articleBody"> {article.body} </p>
            <p className="articleInfo"> by {article.author}, {formatDistanceToNow(new Date(article.created), {addSuffix:true})}</p>
            <button onClick={ handleDelete} >Delete</button>
        </div>
    )
}

export default ArticleDetail;
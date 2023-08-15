import { useState  } from "react";
import { useArticlesContext } from "../hooks/useArticlesContext";

function ArticleForm(props)
{
    const { dispatch } = useArticlesContext()
    const [title, setTitle] = useState('');  
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const newArticle = {title, author, body}

        const response = await fetch('http://localhost:8000/api/articles/', {
            method: 'POST',
            body: JSON.stringify(newArticle),
            headers: {
                'Content-type': 'application/json'
            }
        })

        const json = await response.json()

        if( ! response.ok )
        {
            console.log("error: ", json.error)
        }

        if( response.ok )
        {
            setTitle('')
            setAuthor('')
            setBody('')
            dispatch({
                type:'CREATE_ARTICLE', 
                payload: json
            })
        }   
        
        //close mobile dialog if the form is called in mobile viewport
        if( props.parentCallback )
        {
            props.parentCallback()
        }
            
    }

    return(
        
        <form className="createArticleForm" onSubmit={ handleSubmit }>
            <div className="createArticle">

            <input 
                id = "title"
                type="text" 
                onChange={ (e) => setTitle(e.target.value) }
                value = { title }    
                required
                placeholder="Title"
                className="basicInput"
            /> <br />

            <input 
                id = "author"
                type="text" 
                onChange={ (e) => setAuthor(e.target.value) }
                value = { author }  
                required  
                placeholder="Author"
                className="basicInput"
            /> <br />

            <textarea 
                name="body" 
                type="text"
                id="body" 
                cols="30" 
                rows="10"
                onChange = { (e) => setBody(e.target.value) }
                value = { body }
                required
                placeholder="Your post"
            ></textarea>

            <button className="addArticleButton">POST</button>
            </div>
        </form>
    );
}

export default ArticleForm;
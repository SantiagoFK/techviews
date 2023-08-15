import ArticleForm from "./ArticleForm";
import { useEffect } from "react";

const DialogArticleForm = (props) => {
    useEffect( () => {
        const createForm = document.querySelector('.createArticle')
        createForm.style.display = 'flex';   
    })

    return(
        <div className="dialogArticleForm">
            <div>
                <ArticleForm parentCallback = { props.parentCallback }></ArticleForm>
            </div>
        </div>
    )
}

export default DialogArticleForm;
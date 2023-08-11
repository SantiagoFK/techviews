import { ArticlesContext } from "../context/ArticleContext";
import { useContext } from "react";

export const useArticlesContext = () => {
    const context = useContext(ArticlesContext)

    if( ! context )
    {
        throw Error('Articles context error. Use within providers.')
    }

    return context
}
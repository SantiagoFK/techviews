function ArticleDetail({article})
{
    return(
        <div className="articleDetail">
            <h3 className="articleTitle"> {article.title} </h3>
            <p className="articleAuthor"> by {article.author} </p>
            <p className="articleBody"> {article.body} </p>
            <p className="articleDate"> {article.created} </p>
        </div>
    )
}

export default ArticleDetail;
import React from "react";
import { useParams } from "react-router-dom";
import ArticleContent from './ArticleContent'
import ArticleList from "../Components/ArticleList";
import NotFoundPage from "./NotFoundPage";


const ArticlePage = () => {
    const { username } = useParams();
    const article = ArticleContent.find(article => article.name === username);

    if(!article) return <NotFoundPage />

    const otherArticles = ArticleContent.filter(article => article.name !== username)

    return (
        <>
        <h1>{article.title}</h1>
        {article.content.map((paragraph,key) => (
            <p key={key}>{paragraph}</p>
        ))}
        <h3>Other Articles:</h3>
        <ArticleList articles={otherArticles} />
        </>
    );
}
export default ArticlePage;
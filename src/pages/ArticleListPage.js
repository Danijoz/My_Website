import React from "react";
import ArticleContent from './ArticleContent';
import ArticleList from "../Components/ArticleList";

const ArticleListPage = () => (
    <>
    <h1>Article List</h1>
    <ArticleList articles={ArticleContent} />
    </>
);

export default ArticleListPage;
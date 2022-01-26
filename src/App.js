import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import {
  Routes,
  Route,
} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';


class App extends Component {
 render(){
   return (
        <div className="App">
         <NavBar /> 
            <div id="page-body">   
              <Routes>
                <Route  path="/" element={<HomePage />} exact />  
                <Route path="/about" element={<AboutPage />} />
                <Route path="/article-list" element={<ArticleListPage />} />
                <Route path="/article/:username" element={<ArticlePage />} />  
                <Route element={<NotFoundPage />} />
              </Routes> 
            </div> 
         </div>
    );
  }
}

export default App;

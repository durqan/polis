import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ArticlePage from '../pages/ArticlePage';
import CreateArticlePage from '../pages/CreateArticlePage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/articles/:id" element={<ArticlePage />} />
                <Route path="/create" element={<CreateArticlePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

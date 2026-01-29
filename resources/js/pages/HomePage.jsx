import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('/api/articles')
            .then(res => res.json())
            .then(data => setArticles(data.data || data));
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Статьи</h1>
            <Link to="/create" className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4 inline-block">
                Новая статья
            </Link>
            {articles.map(article => (
                <div key={article.id} className="bg-white rounded shadow p-4 mb-4">
                    <Link to={`/articles/${article.id}`} className="text-xl font-bold">{article.title}</Link>
                    <p className="text-gray-600 mt-2">{article.content.substring(0, 150)}...</p>
                </div>
            ))}
        </div>
    );
}

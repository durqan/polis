import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ArticlePage() {
    const [article, setArticle] = useState(null);
    const [author_name, setAuthorName] = useState('');
    const [text, setText] = useState('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/api/articles/${id}`).then(res => {
            setArticle(res.data);
        });
    }, [id]);

    const addComment = (e) => {
        e.preventDefault();
        axios.post(`/api/articles/${id}/comments`, { author_name, text }).then(() => {
            setAuthorName('');
            setText('');
            axios.get(`/api/articles/${id}`).then(res => setArticle(res.data));
        });
    };

    if (!article) return <div>Загрузка...</div>;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <Link to="/" className="text-blue-600">← Назад</Link>
            <div className="bg-white rounded shadow p-6 mt-4">
                <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
                <p className="whitespace-pre-line mb-6">{article.content}</p>

                <form onSubmit={addComment} className="mb-6">
                    <input
                        type="text"
                        value={author_name}
                        onChange={e => setAuthorName(e.target.value)}
                        className="w-full border p-2 rounded mb-3"
                        placeholder="Ваше имя"
                        required
                    />
                    <textarea
                        value={text}
                        onChange={e => setText(e.target.value)}
                        className="w-full border p-2 rounded"
                        rows="3"
                        placeholder="Комментарий"
                        required
                    />
                    <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded mt-2">
                        Добавить комментарий
                    </button>
                </form>

                <div>
                    <h3 className="text-xl font-bold mb-4">Комментарии ({article.comments?.length || 0})</h3>
                    {article.comments && article.comments.length > 0 ? (
                        article.comments.map(c => (
                            <div key={c.id} className="border-b py-3">
                                <div className="font-bold">{c.author_name}</div>
                                <div>{c.content}</div>
                            </div>
                        ))
                    ) : (
                        <div className="text-gray-500">Нет комментариев</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ArticlePage;

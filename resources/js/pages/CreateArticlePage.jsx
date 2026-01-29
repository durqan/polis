import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function CreateArticlePage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        axios.post('/api/articles', { title, content }).then(() => {
            navigate('/');
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <Link to="/" className="text-blue-600">← Назад</Link>
            <div className="bg-white rounded shadow p-6 mt-4">
                <h1 className="text-2xl font-bold mb-6">Новая статья</h1>
                <form onSubmit={submit}>
                    <input
                        type="text"
                        placeholder="Заголовок"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="w-full border p-2 rounded mb-4"
                        required
                    />
                    <textarea
                        placeholder="Содержание"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        className="w-full border p-2 rounded mb-4"
                        rows="10"
                        required
                    />
                    <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">
                        Опубликовать
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateArticlePage;
